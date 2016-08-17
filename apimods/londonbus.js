/*jshint esversion:6 */
// LondonBus : RouteMaster. Handles Node.js/Express Routes
//
var ApiMod = require('./apimod');

var LondonBus = new ApiMod('LondonBus',function(Get, Set, Data, DataExists, ExposeFns){

  function getDirList(req, res) {
    var aircraft = {
      req:req, res:res,
      plan: ['slashColon.listContents','slashColon.getDirInfo']
    };
    McCroskey.landing(aircraft);
  }

  function getDriveMenu(req, res){
    var aircraft = {
      req:req, res:res,
      plan: ['whatOS.getDriveMenu']
    };
    McCroskey.landing(aircraft);
  }

  function getAppMap(req, res){
    var aircraft = {
      req:req, res:res,
      plan: ['slashColon.read','sherwood.getMap']
    };
    McCroskey.landing(aircraft);
  }

  function getDelibErr(req, res){
    var aircraft = {
      req:req, res:res,
      plan: ['beaker.getBreak']
    };
    McCroskey.landing(aircraft);
  }

  ExposeFns({
    getDirList:getDirList,
    getDriveMenu:getDriveMenu,
    getAppMap:getAppMap,
    getDelibErr:getDelibErr
  });

});

module.exports = LondonBus;
var McCroskey = require('./mccroskey');
