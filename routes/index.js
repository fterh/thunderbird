const fs = require('fs');
const express = require('express');
const router = express.Router();

var outlook = require('./../modules/outlook');

var locationList;
fs.readFile('locationList.json', (err, data) => {
    if (err) console.log(err);
    else locationList = JSON.parse(data);
});

var outlookData = outlook.outlook;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Thunderbird: live Singapore weather',
        shortTitle: 'Thunderbird',
        locationList: locationList.locationList,
        outlookData
    });
});

module.exports = router;
