
// LOAD  PACKAGES
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cfg = require('./cfg/cfg');


if (!cfg) {
    console.error('./cfg/cfg.js file not exists');
    process.exit(1);
}
if (cfg.web.cors) app.use(require('cors')());


// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 80;
// DEFINE MODEL
var Lambda = require('./models/lambda')
var User = require('./models/user')

var fs = require('fs');

app.post('/msg', (req, res) => {
    res.json({ result: 1 })
})



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser({ limit: '50mb' }));
app.use(bodyParser.json());


var problems = [{ chap: 0, index: 5 }, { chap: 1, index: 5 }]
var problem_set = [];

problems.forEach((x) => {
    problem_set.push({ chap: x.chap, set: [] })
})


problems.forEach((p) => {
    var prob = problem_set.find((x) => {
        return p.chap == x.chap
    })
    for (var i = 0; i < p.index; i++) {
        var js = fs.readFileSync('./problem/prob' + p.chap + '_' + i + '.js')
        var md = fs.readFileSync('./problem/prob' + p.chap + '_' + i + '.md')

        prob.set.push({
            js: js.toString('utf-8'), md: md.toString('utf-8')
        }
        )

    }

})



///LOGIN
app.post('/login', (req, res) => {
    if (req.body.id == "test" && req.body.password == "123")
        res.json({ result: 1 })
    else res.json({ result: 0 })
})

//GET DESCRIPTION
app.post('/api/get_discription', (req, res) => {
    console.log(req.body)
    var index = req.body.index

    var text = fs.readFileSync('./lecture/lec' + index + '.md')
    var list = problem_set.find((x) => {
        return x.chap == index
    }).set
    console.log(list)
    res.json({
        result: 1,
        index: index,
        text: text.toString('utf-8'),
        problems: list
    })
}

)





// [RUN SERVER]
var server = app.listen(port, function () {
    console.log("Express server has started on port " + port)
});
// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true });

