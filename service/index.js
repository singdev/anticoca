const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

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
    identite: String,
    details: String,
    attachement: String
}));

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listen at port " + PORT);
})