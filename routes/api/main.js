const express = require("express");
const router = express.Router();
const mainWorker = require('../../workers/mainWorker');

router.get('/', (req, res) => res.json({status: "main router"}));

router.get('/start', (req, res) => {
    if (mainWorker.running) {
        return res.json({ status: "worker already running" });
    }
    mainWorker.start();
    res.json({ status: "started worker" })
});

router.get('/stop', (req, res) => {
    if(!mainWorker.running) {
        return res.json({ status: "Worker not running"});
    }
    mainWorker.stop();
    res.json({ status: "stopped worker" })
});

module.exports = router;


//


router.get('/', (req, res) => res.json({status: "math random test"}));

router.get('/start', (req, res) => {
    if (test.running) {
        return res.json({ status: "test already running" });
    }
    test.start();
    res.json({ status: "started test" })
});

router.get('/stop', (req, res) => {
    if(!test.running) {
        return res.json({ status: "test not running"});
    }
    test.stop();
    res.json({ status: "stopped test" })
});

module.exports = test;