const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const {PythonShell} = require('python-shell');

let options;

router.get('/forward', (req, res) => {
    console.log("go")
    return res.json({
        code: 0
    })
    // options = {
    //     args: ["f"]
    // }

    // PythonShell.run('go.py', options, function (err, results) {
    //     if (err) throw err;
    //     console.log(results);
    // return res.json({
    //     code: 0
    // })
    // });
})

router.get('/back', (req, res) => {
    options = {
        args: ["b"]
    }

    PythonShell.run('go.py', options, function (err, results) {
        if (err) throw err;
        console.log(results);
        return res.json({
            code: 0
        })
    });
})

router.get('/right', (req, res) => {
    options = {
        args: ["r"]
    }

    PythonShell.run('go.py', options, function (err, results) {
        if (err) throw err;
        console.log(results);
        return res.json({
            code: 0
        })
    });
})

router.get('/left', (req, res) => {
    options = {
        args: ["l"]
    }

    PythonShell.run('go.py', options, function (err, results) {
        if (err) throw err;
        console.log(results);
        return res.json({
            code: 0
        })
    });
})

router.get('/stop', (req, res) => {
    console.log("stop")
    return res.json({
        code: 0
    })
    // options = {
    //     args: ["s"]
    // }

    // PythonShell.run('go.py', options, function (err, results) {
    //     if (err) throw err;
    //     console.log(results);
    //     return res.json({
    //     code: 0
    // })
    // });
})

module.exports = router;