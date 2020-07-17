const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage })
var cpUpload = upload.fields([{ name: 'identite', maxCount: 1 }, { name: 'documents', maxCount: 20 }])

const HOST = process.env.HOST || 'localhost';
mongoose.connect('mongodb://' + HOST + ':27017/anticoca', { useNewUrlParser: true, useUnifiedTopology: true });
const QuizModel = mongoose.model('Quiz', mongoose.Schema({
    version: { type: String, enum: ["a", "b"] },
    quiz: { type: String },
    date: { type: Date, default: Date.now() }

}));
const PlainteModel = mongoose.model('Plaintes', mongoose.Schema({
    nom: String,
    tel: String,
    details: String,
    date: { type: Date, default: Date.now() },
    identite: { filename: String, mimetype: String },
    documents: [{ filename: String, mimetype: String }]
}));

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

app.post('/quiz', async (req, res) => {
    try {
        console.log(req.body);
        const quiz = JSON.stringify(req.body.quiz);
        let version = req.body.version;
        let date = new Date();
        const plainte = new QuizModel({ quiz, version, date });
        const p = await plainte.save();
        res.send(p);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

})

app.get('/quiz', async (req, res) => {
    try {
        const entryA = await QuizModel.find({ version: "a" });
        const entryB = await QuizModel.find({ version: "b" });
        const a = [];
        entryA.forEach(ea => {
            a.push(ea.quiz);
        });
        const b = [];
        entryB.forEach(eb => {
            b.push(eb.quiz);
        });
        res.send({ a, b })
    } catch (err) {
        console.log(err);
    }
})

app.post('/plainte', cpUpload, async (req, res, next) => {
    try {
        console.log(req.body)
        console.log(req.files);
        if (req.files['identite']) {
            const f = req.files['identite'][0];
            req.body.identite = { filename: f.filename, mimetype: f.mimetype };
        }
        req.body.documents = [];
        if (req.files['documents']) {
            req.files['documents'].forEach(d => {
                req.body.documents.push({ filename: d.filename, mimetype: d.mimetype })
            })
        }
        req.body.date = new Date();
        const plainte = new PlainteModel(req.body);
        const p = await plainte.save();
        res.send(p);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get("/plainte", async (req, res, next) => {
    const plaintes = await PlainteModel.find({});
    res.send(plaintes)
})

app.get('/plainte/file/:filename', async (req, res, next) => {
    const filename = req.params.filename;
    res.download('/tmp/uploads/' + filename);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listen at port " + PORT);
})
