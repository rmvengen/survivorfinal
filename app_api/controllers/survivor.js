var mongoose = require('mongoose');
var TribesData = mongoose.model('TribesData');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET all AirportData records */
module.exports.playerDataReadAll = function(req, res)
{
  console.log("Finding all player Data Records", req);
  
  PlayerData
    .find({})
    .exec(function(err, playerData){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(playerData);
      sendJSONresponse(res, 200, playerData);
    });
}