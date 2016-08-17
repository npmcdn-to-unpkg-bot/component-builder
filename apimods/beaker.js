/*jshint esversion:6 */
/*
* project beaker : (from the muppets)
* An experiment Mod for throwing errors and debugging.
* Not a real script just for small prototype.
*
*/

var ApiMod = require('./apimod');
var beaker = new ApiMod('beaker',function(Get, Set, Data, DataExists, ExposeFns){

  function getBreak(pID){
    try {


      var flight = McCroskey.getFlight(pID);
      var plan = flight.plan;
      var i = McCroskey.getPlanIndex(pID,'beaker.getBreak');


      plan[i].manifest.returnPayload = [];
      plan[i].manifest.returnPayload.push(dirs);
      plan[i].complete = true;
      McCroskey.setFlight(pID,'plan',plan);
      McCroskey.tower(pID);

    } catch(e) {
      McCroskey.wrong({i:pID, m:'beaker', f:'getBreak', e:e});
    }
  }

  ExposeFns({
		getBreak:getBreak
	});
});

module.exports = beaker;

var McCroskey = require('./mccroskey');
//var eh = require('./herrorford');
