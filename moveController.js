const express = require('express')
const router = express.Router();
const {PythonShell} = require('python-shell');

let python = new PythonShell('go.py', {mode: 'text'})

router.get('/forward', (req, res) => {

    python.send('f')
    // PythonShell.run('go.py', null, function (err, results) {
    //     if (err) throw err;
    //     console.log(results);
    // });
})

router.get('/back', (req, res) => {
    return console.log("back")
})

router.get('/right', (req, res) => {
    return console.log("right")
})

router.get('/left', (req, res) => {
    return console.log("left")
})

router.get('/stop', (req, res) => {
    return console.log("stop")
})

module.exports = router;