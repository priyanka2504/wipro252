const express = require('express')
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'Get, post, options, put, patch, delete');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/survey");

var nameSchema = new mongoose.Schema({
    Rate: String,
    Framework: String,
    Aware: String,
    List: String,
    Workshop: String,
    Important: String
});
var User = mongoose.model("User", nameSchema);

app.post('/api/add', (req, res) => {
    console.log("inside post")
    const myData = new User(
        {
            Rate: req.body.Rate,
            Framework: req.body.Framework,
            Aware: req.body.Aware,
            List: req.body.List,
            Workshop: req.body.Workshop,
            Important: req.body.Important,
        });
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


const port = process.env.PORT || 1111;
app.listen(port, () => console.log(`Listening ${port}`))