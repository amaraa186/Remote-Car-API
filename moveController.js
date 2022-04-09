const express = require('express')
const router = express.Router();
const {PythonShell} = require('python-shell');

let options;

router.get('/forward', (req, res) => {

    options = {
        args: ["f"]
    }

    PythonShell.run('go.py', options, function (err, results) {
        if (err) throw err;
        console.log(results);
    });
})

router.get('/back', (req, res) => {
    options = {
        args: ["b"]
    }

    PythonShell.run('go.py', options, function (err, results) {
        if (err) throw err;
        console.log(results);
    });
})

router.get('/right', (req, res) => {
    options = {
        args: ["r"]
    }

    PythonShell.run('go.py', options, function (err, results) {
        if (err) throw err;
        console.log(results);
    });
})

router.get('/left', (req, res) => {
    options = {
        args: ["l"]
    }

    PythonShell.run('go.py', options, function (err, results) {
        if (err) throw err;
        console.log(results);
    });
})

router.get('/stop', (req, res) => {
    options = {
        args: ["s"]
    }

    PythonShell.run('go.py', options, function (err, results) {
        if (err) throw err;
        console.log(results);
    });
})

module.exports = router;