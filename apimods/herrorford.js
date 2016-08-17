/*jshint esversion:6 */
// hErrorford : error handling.
//
var ApiMod = require('./apimod');

var hErrorford = new ApiMod('hErrorford',function(Get, Set, Data, DataExists, ExposeFns){
  // TODO: Log browser, OS, Screen size, etc.
  // TODO: language be configurable or passed in.

  Data('parLang','en','string');
  Data('dbgLang','en','string');
  Data('debugOutput',true,'bool');

  //set the Paricipant Language
  function setParLang(pLang){
    if(typeof pLang !== 'string' && pLang.length > 2){
      return '';
    }
    Set('parLang',pLang);
  }

  //set the Debug Language
  function setDbgLang(){
    if(typeof pLang !== 'string' && pLang.length > 2){
      return '';
    }
    Set('parLang',pLang);
  }

  function cleanParam(pData){
    if(typeof pData !== 'string'){
      pData = pData.toString();
    }
    pData = pData.replace(/&/g, "%26");
    pData = pData.replace(/\|/g, "");
    pData = pData.replace(/\+/g, "%2B");
    pData = pData.replace(/'/g, "\'");
    pData = pData.replace(/\\/g, "\\\\");
    return pData;
  }

  function getException(e){
    switch (e) {
      case 'EvalError':
        return 'EvalError: Raised when the eval() functions is used in an incorrect manner.';
      case 'RangeError':
        return 'RangeError: Raised when a numeric variable exceeds its allowed range.';
      case 'ReferenceError':
        return 'ReferenceError: Raised when an invalid reference is used.';
      case 'SyntaxError':
        return 'SyntaxError: Raised when a syntax error occurs while parsing JavaScript code.';
      case 'URIError':
        return 'URIError: Raised when the encodeURI() or decodeURI() functions are used in an incorrect manner.';
      default:
        return 'TypeError: Raised when the type of a variable is not as expected.';
    }
  }

  // Display error info/stack to console
  function displayErrors(pErr){
    console.log('-----------');
    console.log('Error in Mod: ' +pErr.mod +' | Func: ' +pErr.func);
    //console.log('name: ' +pErr.name);
    console.log(getException(pErr.name));
    console.log('msg: '+pErr.msg);
    if (pErr.isObj === true) {
      console.log('line: '+pErr.line);
      //console.log('\n' +pErr.stfLingoMsg +': ' + pErr.msg);
      //console.log('\n' +pErr.stfLingoStack +':');
      console.log('-----------');
    }
    console.log(pErr.stack);
  }

  // Parameters contain Error Handling information,
  // this is to be sent to server for logging.
  //function logError(pErr, pMod, pErno, pFunc, pXtra){
  function logError(p){
    //{i:pID, m:'McCroskey', f:'getPlan', e:e}
    var line, index, clean;
    var oErr = {
      isObj: true,
      name: p.e.name,
      msg: p.e.toString(),
      stack: p.e.stack,
      mod: cleanParam(p.m),
      func: cleanParam(p.f),
      line: '',
      //dbgMsg: lingo.getTranslation(pMod, 'msg', Get('dbgLang') ),
      //dbgStack: lingo.getTranslation(pMod, 'stack', Get('dbgLang') ),
      //dbgText: lingo.getTranslation(pMod, 'text', Get('dbgLang') ),
      xtra: p.x
    };

    if (typeof p.e === 'object') {
      //line = pErr.stack.split("\n")[4];
      line = p.e.stack.split("\n")[1];
      index = line.indexOf("at ");
      oErr.line = line.slice(index+2, line.length);
    } else {
      oErr.isObj = false;
    }

  	if(Get('debugOutput')){
  		displayErrors(oErr);
  	}
  	// Send error to Air Traffic Control
    // uncomment when the node.js error logger is set up.
  	//axios.post('/errorlogger/12345', { pErr: pErr.stack});
  }

  ExposeFns({
    logError:logError,
    setParLang:setParLang,
    setDbgLang:setDbgLang
  });

});

module.exports = hErrorford;
var lingo = require('./lingo');
