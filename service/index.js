const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const cors = require('cors');

const client = redis.createClient();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/quiz', async (req, res) => {
    const json = JSON.stringify(req.body.quiz);
    let version = 'b';
    if (req.body.version == 'a') {
        version = 'a';
    }
    let str = await getValue(version);
    if (!str) {
        str = '[]';
    }
    let array = JSON.parse(str);
    try {
        array.push(json);
    } catch(err){
        array = [];
        array.push(json);
    }
    let result = await setValue(version, JSON.stringify(array));
    res.send(result);
})

app.get('/quiz', async (req, res) => {
    const a = await getValue('a');
    const b = await getValue('b');
    res.send({ a, b });
})

function getValue(key) {
    return new Promise((resolve, reject) => {
        client.get(key, (err, reply) => {
            if (err) {
                reject(err);
            } else {
                resolve(reply);
            }
        });
    });
}

function setValue(key, value) {
    return new Promise((resolve, reject) => {
        client.set(key, value, (err, reply) => {
            if (err) {
                reject(err);
            } else {
                resolve(reply);
            }
        });
    });
}

app.listen(PORT, () => {
    console.log("Listen at port " + PORT);
})