var ApiMod = require('../../apimods/apimod');

var menuTree = new ApiMod('menuTree',function(Get, Set, Data, DataExists, ExposeFns){

  function sortDirFiles(s){
    s.sort(function(a,b){
      if(a['D'] && !b['D']){
        return -1;
      }
      if(!a['D'] && b['D']){
        return 1;
      }
      return a['n'].toString().localeCompare(b['n']);
    });
    return s;
  }

  function makeEmptyArray(a,b){
    var arr = [];
    var i;
    for(i=a; i<b; i++){
      arr.push(i);
    }
    return arr;
  }

  function getPath(pDir,pSlash){
    return pDir.path +pSlash +pDir.name;
  }

  function getSlash(pOS){
    if(pOS==='u'){
      return '/';
    }
    return '\\';
  }

  function getLevel(i){
    return ((i*1)+1);
  }

  function getDir(o,parent,os){
    return {
      name: o['n'],
      level: getLevel(parent.level),
      parent: o['p'],
      type: 'D',
      path: getPath(parent,os),
      open: false,
      children: [],
      loaded: false
    };
  }

  function getSym(o,parent,os){
    return {
      name: o['n'],
      level: getLevel(parent.level),
      parent: o['p'],
      type: 'S',
      path: getPath(parent,os)
    };
  }

  function getFile(o,parent,os){
    return {
      name: o['n'],
      level: getLevel(parent.level),
      parent: o['p'],
      type: 'F',
      path: getPath(parent,os),
      extension: o['e']
    };
  }

  function getRoot(path,dir){
    return [{
      name: dir,
      level: 0,
      parent: 0,
      type: 'D',
      path: path.substring(0,(path.length - (dir.length+1))),
      open: true,
      children: [],
      loaded: false
    }];
  }

  function stripPrefix(a,b){
    return a.substring(b.length, a.length);
  }

  ExposeFns({
		sortDirFiles:sortDirFiles,
    makeEmptyArray:makeEmptyArray,
    getPath:getPath,
    getSlash:getSlash,
    getLevel:getLevel,
    getDir:getDir,
    getSym:getSym,
    getFile:getFile,
    getRoot:getRoot,
    stripPrefix:stripPrefix
	});
});

module.exports = menuTree;
//var eh = require('../../apimods/herrorford');
