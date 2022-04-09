const express = require("express");
const router = express.Router();
<<<<<<< HEAD
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
=======
const { PythonShell } = require("python-shell");

let python = new PythonShell("go.py", { mode: "text" });

router.get("/:arg", (req, res) => {
  let arg = req.params.arg;
  console.log(arg);
  let options = {
    args: [arg],
  };

  PythonShell.run("go.py", options, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

// router.get("/back", (req, res) => {
//   return console.log("back");
// });

// router.get("/right", (req, res) => {
//   return console.log("right");
// });

// router.get("/left", (req, res) => {
//   return console.log("left");
// });

// router.get("/stop", (req, res) => {
//   return console.log("stop");
// });

module.exports = router;
>>>>>>> a82b1c369b0f5a280288575ff415138219b578a6
