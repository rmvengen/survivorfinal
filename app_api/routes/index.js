var express             = require('express');
var router              = express.Router();
var ctrlGameData        = require('../controllers/game');
var ctrlSurvivorData    = require('../controllers/survivor.js');
var ctrlOmdbApi         = require('../controllers/omdbapi');

/* TAKEOFF DATA */
//router.get('/tribes/:originalTribe', ctrlGameData.tribesDataReadOne);
router.get('/tribes', ctrlGameData.tribesDataReadAll);

/* CLIMB DATA */
router.get('/seasons/:seasonName', ctrlGameData.seasonsDataReadOne);
router.get('/seasons', ctrlGameData.seasonsDataReadAll);

/* LANDING DATA */
//router.get('/contestants/:contestantName', ctrlSurvivorData.contestantsDataReadOne);
router.get('/contestants', ctrlGameData.contestantsDataReadAll);
//router.get('/contestantsdata', ctrlGameData.contestansFindAllContestants);

/* AIRPORT DATA */
//router.get('/survivordata', ctrlSurvivorData.survivorDataReadAll);

/* API KEYS */
//router.get('/omdbapi/:t/:y', ctrlOmdbApi.getWeatherData);

module.exports = router;
