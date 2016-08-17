/*jshint esversion:6 */
/*
* slashColon : slash is Unix/Linux (/) colon is Windows (c:)
* file/system directory interaction
* 
*/

var ApiMod = require('./apimod');

var slashColon = new ApiMod('slashColon',function(Get, Set, Data, DataExists, ExposeFns){

  function getDirInfo(pID){
    var plan = McCroskey.getPlan(pID);
    var i = McCroskey.getPlanIndex(pID,'slashColon.getDirInfo');

    if(plan[i].manifest.loopCount === 0){
      // start
      plan[i].manifest.sentPayload = plan[i-1].manifest.returnPayload;
      plan[i].manifest.loopLength = plan[i].manifest.sentPayload.length;
    }

    if(plan[i].manifest.loopCount === plan[i].manifest.loopLength){
      // end
      plan[i].complete = true;
      McCroskey.setFlight(pID,'plan',plan);
      return McCroskey.tower(pID);
    }

    McCroskey.setFlight(pID,'revIMJolly','slashColon.getDirInfo');
    plan[i].manifest.loopCount++;
    McCroskey.setFlight(pID,'plan',plan);
    McCroskey.groundControl('slashColon.infoAbout', pID);
  }


  function canAccess(pFile){
    // This is an Asynchronous call.
    try {
      return fs.access(pFile, canAccessCB);
    } catch(e) {
      // ER200000
      return eh.logError(e, 'slashColon', 'ER200000', 'canAccess', { pFile: pFile });
    }
  }

  function canAccessCB(e, pPayload){
    if(e){
      return eh.logError(e, 'slashColon', 'ER200001', 'canAccessCB', '');
    }
    return pPayload;
  }

  function createDir(pDir){
    // This is an Asynchronous call.
    try {
      return fs.mkdir(pFile, createDirCB);
    } catch(e) {
      // ER200002
      return eh.logError(e, 'slashColon', 'ER200002', 'createDir', { pDir: pDir });
    }
  }

  function createDirCB(e){
    if(e){
      // ER200003
      return eh.logError(e, 'slashColon', 'ER200003', 'createDirCB', '');
    }
    return {success: true};
  }

  function deleteFile(pFile){
    // This is an Asynchronous call.
    try {
      return fs.unlink(pFile, deleteFileCB);
    } catch(e) {
      // ER200004
      return eh.logError(e, 'slashColon', 'ER200004', 'deleteFile', { pFile: pFile });
    }
  }

  function deleteFileCB(e){
    if(e){
      return eh.logError(e, 'slashColon', 'ER200005', 'deleteFileCB', '');
    }
    return {success: true};
  }

  function deleteDir(pDir){
    // This is an Asynchronous call.
    try {
      return fs.rmdir(pFile, deleteDirCB);
    } catch(e) {
      // ER200006
      return eh.logError(e, 'slashColon', 'ER200006', 'deleteDir', { pDir: pDir} );
    }
  }

  function deleteDirCB(e){
    if(e){
      return eh.logError(e, 'slashColon', 'ER200007', 'deleteDirCB', '');
    }
    return {success: true};
  }

  function infoAbout(pID){
    // This is an Asynchronous call.
    try {
      var flight = McCroskey.getFlight(pID);
      var dir = flight.req.query.dir;
      //
      //TODO fix the dir call.
      //
      var plan = flight.plan;
      var i = McCroskey.getPlanIndex(pID,flight.revIMJolly);
      var curCount = plan[i].manifest.loopCount-1;
      var file = plan[i].manifest.sentPayload[curCount];
      if(dir === undefined || dir === ''){
        dir = process.cwd();
      }
      fs.stat(path.join(dir, file), infoAboutCB.bind(null, pID));
    } catch(e) {
      // ER200008
      return eh.logError(e, 'slashColon', 'ER200008', 'infoAbout', { pFile: pFile });
    }
  }

  function infoAboutCB(pID, e, pPayload){
    if(e){
      return McCroskey.wrong({i:pID, m:'slashColon', f:'infoAboutCB', e:e});
    }
    /*
    stats.isFile() - Returns true if file exists (and is not directory)
    stats.isDirectory() - Returns true if directory
    stats.isBlockDevice() - Returns true if the file is a block device
    stats.isCharacterDevice() - Returns true if character device
    stast.isSymbolicLink() - Returns true if symbolic link
    stats.isFifo() - FIFO is a UNIX-named pipe
    stats.isSocket() - Returns true if file is a UNIX domain socket
    */
    var flight = McCroskey.getFlight(pID);
    var plan = flight.plan;
    var i = McCroskey.getPlanIndex(pID,flight.revIMJolly);
    var curCount = plan[i].manifest.loopCount-1;
    var file = plan[i].manifest.sentPayload[curCount];
    var info = {
      n: file,
      p: flight.req.query.index,
      F: pPayload.isFile(),
      D: pPayload.isDirectory(),
      S: pPayload.isSymbolicLink(),
      e: path.extname(file)
    };

    if(curCount === 0){
      plan[i].manifest.returnPayload = [];
    }
    plan[i].manifest.returnPayload.push(info);
    //Set('plan', plan);
    //McCroskey(revIMJolly);
    McCroskey.setFlight(pID,'plan',plan);
    McCroskey.tower(pID);
  }


  function listContents(pID){
    // This is an Asynchronous call.
    try {
      var flight = McCroskey.getFlight(pID);
      var dir = flight.req.query.dir;
      //
      //TODO fix the dir call.
      //
      if(dir === undefined || dir === ''){
        dir = process.cwd();
      }
      fs.readdir(dir, listContentsCB.bind(null, pID));
    } catch(e) {
      // ER200010
      return eh.logError(e, 'slashColon', 'ER200010', 'listContents', { pID: pID });
    }
  }

/*
  var listContentsCB = function (pRes, pErr, pPayload){
    if(pErr){
      return eh.logError(pErr, 'slashColon', 'ER200011', 'listContentsCB', '');
    }
    var res = Get('res');
    res.send(pPayload);
  }.bind(this, Get('res'));
*/

  function listContentsCB(pID, e, pPayload){
    if(e){
      return McCroskey.wrong({i:pID, m:'slashColon', f:'listContentsCB', e:e});
    }
    var i = McCroskey.getPlanIndex(pID, 'slashColon.listContents');
    var plan = McCroskey.getPlan(pID);
    plan[i].manifest.returnPayload = pPayload;
    plan[i].complete = true;
    McCroskey.setFlight(pID,'plan',plan);
    McCroskey.tower(pID);
    //McCroskey('listContents');
  }

  function read(pID){
    // This is an Asynchronous call.
    try {
      var flight = McCroskey.getFlight(pID);
      var file = flight.req.query.file;
      //
      //TODO fix the file call.
      //
      fs.readFile(file, readCB.bind(null, pID));
    } catch(e) {
      McCroskey.wrong({i:pID, m:'slashColon', f:'read', e:e});
    }
  }

  function readCB(pID, e, pPayload){
    if(e){
      return McCroskey.wrong({i:pID, m:'slashColon', f:'readCB', e:e});
    }
    var i = McCroskey.getPlanIndex(pID, 'slashColon.read');
    var plan = McCroskey.getPlan(pID);
    plan[i].manifest.returnPayload = pPayload;
    plan[i].complete = true;
    McCroskey.setFlight(pID,'plan',plan);
    McCroskey.tower(pID);
  }

  function rename(pOld, pNew){
    // This is an Asynchronous call.
    try {
      return fs.rename(pOld, pNew, renameCB);
    } catch(e) {
      // ER200015
      return eh.logError(e, 'slashColon', 'ER200015', 'rename', { pOld: pOld, pNew: pNew });
    }
  }

  function renameCB(e){
    if(e){
      return eh.logError(pErr, 'slashColon', 'ER200016', 'renameCB', '');
    }
    return {success: true};
  }

  function write(pFile, pData){
    try {
      return fs.writeFile(pFile, pData, writeCB);
    } catch(e) {
      // ER200017
      return eh.logError(e, 'slashColon', 'ER200017', 'write', { pFile: pFile, pData: pData });
    }
  }

  function writeCB(e){
    if(e){
      return eh.logError(pErr, 'slashColon', 'ER200018', 'writeCB', '');
    }
    return {success: true};
  }

  ExposeFns({
		canAccess:canAccess,
		canAccessCB:canAccessCB,
		createDir:createDir,
		createDirCB:createDirCB,
    deleteFile:deleteFile,
    deleteFileCB:deleteFileCB,
    deleteDir:deleteDir,
    deleteDirCB:deleteDirCB,
    infoAbout:infoAbout,
    infoAboutCB:infoAboutCB,
    listContents:listContents,
    listContentsCB:listContentsCB,
    read:read,
    readCB:readCB,
    rename:rename,
    renameCB:renameCB,
    write:write,
    writeCB:writeCB,
    getDirInfo:getDirInfo
	});
});

module.exports = slashColon;

var fs = require('fs');
var path = require('path');
var McCroskey = require('./mccroskey');
