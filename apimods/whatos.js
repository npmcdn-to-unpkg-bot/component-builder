/*jshint esversion:6 */
/*
* project whatOS
* Determine the Operating System
* that Node runs on
*
*/


/*
os stuff
http://stackoverflow.com/questions/10265798/determine-project-root-from-a-running-node-js-application
https://www.google.co.uk/search?client=firefox-b&q=nodejs+get+current+directory&sa=X&ved=0ahUKEwjN_6vgrJjOAhUHI8AKHYf5B4IQ1QIIXCgA
http://stackoverflow.com/questions/19275776/node-js-how-to-get-the-os-platforms-user-data-folder
https://nodejs.org/api/os.html#os_os_homedir
http://stackoverflow.com/questions/9080085/node-js-find-home-directory-in-platform-agnostic-way
https://www.google.co.uk/search?client=firefox-b&q=nodejs+get+home+directory&sa=X&ved=0ahUKEwjN_6vgrJjOAhUHI8AKHYf5B4IQ1QIIXSgB
https://www.google.co.uk/search?q=node.js+find+root+directories&ie=utf-8&oe=utf-8&client=firefox-b&gfe_rd=cr&ei=dSCbV7zbJO_W8ge8qbWABQ
http://www.altap.cz/salamander/screenshots/
*/
var ApiMod = require('./apimod');
var os = require('os');
var path = require('path');
var whatOS = new ApiMod('whatOS',function(Get, Set, Data, DataExists, ExposeFns){

  Data('cwd',process.cwd(),'string');
  Data('dirname',__dirname,'string');
  Data('env',process.env,'object');
  Data('filename',__filename,'string');
  Data('homedir',os.homedir(),'string');
  Data('hostname',os.hostname(),'string');
  Data('pcwd',path.parse(process.cwd()),'object');
  Data('pdirname',path.parse(__dirname),'object');
  Data('pfilename',path.parse(__filename),'object');
  Data('phomedir',path.parse(os.homedir()),'object');
  Data('platform',os.platform(),'string');
  Data('ptmpdir',path.parse(os.tmpdir()),'object');
  Data('release',os.release(),'string');
  Data('tmpdir',os.tmpdir(),'string');
  Data('type',os.type(),'string');
  Data('userInfo',os.userInfo(),'object');

  function getCWD(){ return Get('cwd'); }

  function getEnv(){ return Get('env'); }

  function getHomeDir(){ return Get('homedir'); }

  function getHostName(){ return Get('hostname'); }

  function getPlatform(){ return Get('platform'); }

  function getRelease(){ return Get('release'); }

  function getTemp(){ return Get('tmpdir'); }

  function getType(){ return Get('type'); }

  function getUserInfo(){ return Get('userInfo'); }

  function getFilename(){ return Get('filename'); }

  function getDirname(){ return Get('dirname'); }

  function getpCWD(){ return Get('pcwd'); }

  function getpHomeDir(){ return Get('phomedir'); }

  function getpTemp(){ return Get('ptmpdir'); }

  function getpFilename(){ return Get('pfilename'); }

  function getpDirname(){ return Get('pdirname'); }

  function getDriveMenu(pID){
    try {
      var dirs ={
        cwd:getCWD(),
        //env:getEnv(),
    		homedir:getHomeDir(),
    		//hostname:getHostName(),
        platform:getPlatform(),
        release:getRelease(),
        //tempdir:getTemp(),
        type:getType(),
        //userinfo:getUserInfo(),
        //filename:getFilename(),
        //dirname:getDirname(),
        //pcwd:getpCWD(),
        //phomedir:getpHomeDir(),
        //ptemp:getpTemp(),
        //pfilename:getpFilename(),
        //pdirname:getpDirname()
      };
      var flight = McCroskey.getFlight(pID);
      var plan = flight.plan;
      var i = McCroskey.getPlanIndex(pID,'whatOS.getDriveMenu');
      plan[i].manifest.returnPayload = [];
      plan[i].manifest.returnPayload.push(dirs);
      plan[i].complete = true;
      McCroskey.setFlight(pID,'plan',plan);
      McCroskey.tower(pID);
    } catch(e) {
      McCroskey.wrong({i:pID, m:'whatOS', f:'getDriveMenu', e:e});
    }
  }

  ExposeFns({
		getCWD:getCWD,
		getEnv:getEnv,
		getHomeDir:getHomeDir,
		getHostName:getHostName,
    getPlatform:getPlatform,
    getRelease:getRelease,
    getTemp:getTemp,
    getType:getType,
    getUserInfo:getUserInfo,
    getFilename:getFilename,
    getDirname:getDirname,
    getpCWD:getpCWD,
    getpHomeDir:getpHomeDir,
    getpTemp:getpTemp,
    getpFilename:getpFilename,
    getpDirname:getpDirname,
    getDriveMenu:getDriveMenu
	});
});

module.exports = whatOS;

var McCroskey = require('./mccroskey');
