/*jshint esversion:6 */
// McCroskey : Air Traffic Control.
//
var ApiMod = require('./apimod');
/*
* app.get('/p/:tagId' -> req.params.tagId);
* /p/5 -> tagId is set to 5
* app.get('/p' -> req.query.tagId);
* GET /p?tagId=5 -> tagId is set to 5
*/
var McCroskey = new ApiMod('McCroskey',function(Get, Set, Data, DataExists, ExposeFns){
  // TODO:
  Data('queue',[],'object');

  function landing(pFlight){
    try {
      var q = Get('queue');
      var fNo = q.length;
      var i,l=pFlight.plan.length;
      var plan = [];
      var manifest = {
        sentPayload: {},
        returnPayload: {},
        loopCount: 0,
        loopLength: 0
      };
      for(i=0;i<l;i++){
        plan.push({name:pFlight.plan[i], manifest: manifest, complete:false});
      }
      pFlight.plan = plan;
      pFlight.revIMJolly='';
      q.push(pFlight);
      Set('queue',q);
      tower(fNo);
    } catch(e) {
      // ER600001
      return eh.logError(e, 'McCroskey', 'ER600001', 'landing', '');
    }
  }

  function takeoff(pID, pType, aircraft){
    var flight = McCroskey.getFlight(pID);
    var res = flight.res;
    var err;

    switch (pType) {
      case 'error':
        err = Get('err');
        console.log('takeoff error: ' +err);
        return res.status(500).send(err).end();
      case 'fail':
        err = Get('fail');
        console.log('takeoff fail: ' +err);
        return res.status(500).send(err).end();
      default:
        console.log('takeoff pType: ' +pType);
        return res.send(aircraft).end();
    }
  }

  function groundControl(callback,pID){
    try {
      console.log('groundControl pID: ' +pID +' | callback: ' +callback);
      var modFunc = callback.split('.');
      var mod = modFunc[0];
      var func = modFunc[1];
      switch (mod) {
        case 'slashColon':
          return slashColon[func](pID);
        case 'whatOS':
          return whatOS[func](pID);
        case 'sherwood':
          return sherwood[func](pID);
        case 'beaker':
          return beaker[func](pID);
        default:
          return '';
      }
      //mod[func](pID);
      //callback(pID);
    } catch(e) {
      wrong({i:pID, m:'McCroskey', f:'groundControl', e:e});
    }
  }

/*
  function groundControl(functionName, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    console.log('context: ' +context);
    console.log('func: ' +func);
    console.log('args: ' +args);
    console.log('functionName: ' +functionName);
    console.dir(arguments);
    return context[func].apply(context, args);
}
*/
  function tower(pID){
    try {
      var q = Get('queue');
      var plan = q[pID].plan;
      var i, len = plan.length;

      for(i=0; i< len; i++){
        if(!plan[i].complete){
          //return groundControl(plan[i].name,global,pID);
          return groundControl(plan[i].name,pID);
        }
      }
      //console.log('So near yeti sofa');
      takeoff(pID,'success', plan[len-1].manifest.returnPayload);
    } catch(e) {
      wrong({i:pID, m:'McCroskey', f:'tower', e:e});
    }

  }

  function getPlanIndex(pID,pFunc){
    try {
      var q = Get('queue');
      var plan = q[pID].plan;
      var i, len = plan.length;
      for(i=0; i< len; i++){
        if(pFunc === plan[i].name){
          return i;
        }
      }
      return -1;
    } catch(e) {
      wrong({i:pID, m:'McCroskey', f:'getPlanIndex', e:e});
    }
  }

  function getFlight(pID){
    try {
      var q = Get('queue');
      return q[pID];
    } catch(e) {
      wrong({i:pID, m:'McCroskey', f:'getFlight', e:e});
    }
  }

  function setFlight(pID,pKey,pVal){
    try {
      var q = Get('queue');
      var flight = q[pID];
      if(flight.hasOwnProperty(pKey)){
        flight[pKey]=pVal;
        Set('queue', q);
      }
    } catch(e) {
      wrong({i:pID, m:'McCroskey', f:'setFlight', e:e});
    }
  }

  function getPlan(pID){
    try {
      var q = Get('queue');
      return q[pID].plan;
    } catch(e) {
      wrong({i:pID, m:'McCroskey', f:'getPlan', e:e});
    }
  }

  //function touchAndGo(){}

  function wrong(p){
    //var cargo = {i:pID, m:'', f:'', e:e, x:''};
    //var cargo = {i:pID, m:'', f:'', e:e, x:'', r:''};
    eh.logError(p);

    //if(p.r !== undefined || p.r === true){
    //  touchAndGo(p);
    //}
  }


  /*
    var listContentsCB = function (pRes, pErr, pPayload){
      if(pErr){
        return eh.logError(pErr, 'slashColon', 'ER200011', 'listContentsCB', '');
      }
      var res = Get('res');
      res.send(pPayload);
    }.bind(this, Get('res'));


    function updated(extraInformation, event, filename) {
    log("CHANGED\t/share/channels/" + extraInformation + filename);
}

for(i in channels)
    fs.watch('share/channels/' + channels[i], {persistent: false},
              updated.bind(null, 'wherever/it/is/'));
  */

  /*

function error(){}
  */

  ExposeFns({
    landing:landing,
    takeoff:takeoff,
    groundControl:groundControl,
    tower:tower,
    getPlanIndex:getPlanIndex,
    getFlight:getFlight,
    setFlight:setFlight,
    getPlan:getPlan,
    wrong:wrong
  });

});

module.exports = McCroskey;
var eh = require('./herrorford');
var slashColon = require('./slashcolon');
var whatOS = require('./whatOS');
var sherwood = require('./sherwood');
var beaker = require('./beaker');
