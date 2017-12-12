var mongoose = require('mongoose');

var RewardSchema = new mongoose.Schema({
    originalTribe: String,
    firstSwitchTribe: String,
    secondSwitchTribe: String,
    Eliminated: String,
    Dissolution: String,
    DissolutionAndSwitch: String,
    mergeTribe: String
})

var TribesSchema = new mongoose.Schema({
	seasonName: String,
	contestantName: String,
	tribe: [RewardSchema]
});

mongoose.model('TribesData', TribesSchema, 'TribesData');