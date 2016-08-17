//import transMD from './multilingualtext.json';
/*
  Does not matter which way the json is stored.
  it will be [lang][key] or [key][lang]
  map it and have it load in json with different ways to suit.
  Use stat.order for ored that lang/keys are in.

  The way this works is all the translated text is held in
  the field markdown.

  It can be in the order of language, file and then key-value pair.
  It could also be file, key-value pair then language.

  All that matters is the order is correct as the rest can be determined.
*/

/*
* UN Languages are
* en : English
* fr : French
* es : Spanish
* cn : Chinese
* ru : Russian
* ar : Arabic
*
*
*/

var ApiMod = require('./apimod');
var eh = require('./herrorford');
var transMD = require('./multilingualtext.json');

var lingo = new ApiMod('lingo',function(Get, Set, Data, DataExists, ExposeFns){
  // TODO:

  var order = ['lang','calMod','lkup'];
  var orderVal = {
    'lang': '',
    'calMod': '',
    'lkup': ''
  };

  //var md = JSON.parse(transMD);
  var md = transMD.markdown;
  var i;

  Data('order',order,'object');
  Data('orderVal',orderVal,'object');

  for(i in md){
    Data(i,md[i],'object');

    //if (md.hasOwnProperty(i)) {
    //  console.log(i + " -> " + md[i]);
    //}
  }

  function getTranslation(pMod, pLkup, pLang){ // ER100001
    try {
      var text = Get(pLang +'_' +pMod);
      return text[pLkup];
    } catch(e) { // ER100001
      // Log Error
      var xtra = {
        pMod: pMod,
        pLkup: pLkup,
        pLang: pLang
      };
      McCroskey.wrong({i:pID, m:'lingo', f:'getTranslation', e:e, x:xtra});
      //eh.logError(e, 'lingo', 'ER400001', 'getTranslation', xtra);
    }
  }

  ExposeFns({
    getTranslation:getTranslation
  });

});

module.exports = lingo;
