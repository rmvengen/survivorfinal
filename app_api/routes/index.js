var express             = require('express');
var router              = express.Router();
var ctrlPlayerData        = require('../controllers/player');
var ctrlSurvivorData    = require('../controllers/survivor.js');
var ctrlOmdbApi         = require('../controllers/omdbapi');

/* TAKEOFF DATA */
//router.get('/tribes/:originalTribe', ctrlGameData.tribesDataReadOne);
router.get('/tribes', ctrlPlayerData.tribesDataReadAll);

/* CLIMB DATA */
router.get('/seasons/:seasonName', ctrlPlayerData.seasonsDataReadOne);
router.get('/seasons', ctrlPlayerData.seasonsDataReadAll);

/* LANDING DATA */
//router.get('/contestants/:contestantName', ctrlSurvivorData.contestantsDataReadOne);
router.get('/contestants', ctrlPlayerData.contestantsDataReadAll);
//router.get('/contestantsdata', ctrlGameData.contestansFindAllContestants);

/* AIRPORT DATA */
//router.get('/survivordata', ctrlSurvivorData.survivorDataReadAll);

/* API KEYS */
//router.get('/omdbapi/:t/:y', ctrlOmdbApi.getWeatherData);

module.exports = router;
