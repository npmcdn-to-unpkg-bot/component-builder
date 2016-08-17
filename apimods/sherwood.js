/*jshint esversion:6 */
// Sherwood : Forest. AST - Abstract Syntax Trees
//
var ApiMod = require('./apimod');
var path = require('path');
var acorn = require('acorn');
var acornJSX = require('acorn-jsx');
var walk = require('acorn/dist/walk');
//var walkJSX = require('acorn-jsx-walk').walk;
var walkJSX = require('acorn-jsx-walk');
//var base = require('acorn-jsx-walk').base;
//import walk as walkJSX from 'acorn-jsx-walk';
//import { base } from 'acorn-jsx-walk';
//var walk = require('acorn/util/walk');


var sherwood = new ApiMod('sherwood',function(Get, Set, Data, DataExists, ExposeFns){

  Data('acorn',{
    sourceType: "module",
    ranges: true,
    onComment: [],
    onToken: []},'object');
  Data('acornJSX',{sourceType: "module",plugins: { jsx: true }},'object');
/*
  Data('walk',{
    //VariableDeclaration: function(node) { console.log();},
    //TemplateLiteral: function() { console.log(); },
    //Identifier: function(node) { console.log();},
    ImportDeclaration : function(node) {
      //console.log('Import: ' +node.name);
      console.dir(node);
    }
  },'object');
*/
/*
  Data('walk',{
    ImportDeclaration: function(node) {
      //console.dir(node);
      console.dir('-----------------------------');
      console.dir('imported file name: ' +node.specifiers[0].local.name);
      console.dir('imported file val: ' +node.source.value);

    },
    VariableDeclaration: function(node) {
      //console.dir(node);
      console.dir('-----------------------------');
      console.dir('imported file name: ' +node.specifiers[0].local.name);
      console.dir('imported file val: ' +node.source.value);

    }
  },'object');
*/
/*
VariableDeclaration
ExpressionStatement
https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API

*/

  Data('walk',{
    ImportDeclaration: walkImport,
    VariableDeclaration: walkVar
  },'object');


  function walkImport(node){
    try {
      console.dir('-----------------------------');
      console.dir('imported file name: ' +node.specifiers[0].local.name);
      console.dir('imported file val: ' +node.source.value);
    } catch(e) {
      McCroskey.wrong({i:pID, m:'sherwood', f:'walkImport', e:e});
    }
  }

  function walkVar(node){
    try {
      console.dir('-----------------------------');
      console.dir('imported file var name: ' +node.declarations[0].id.name);
      console.dir('imported file import: ' +node.declarations[0].init.callee.name);
      console.dir('imported file val: ' +node.declarations[0].init.arguments[0].value);
    } catch(e) {
      McCroskey.wrong({i:pID, m:'sherwood', f:'walkVar', e:e});
    }
  }

  function getAST(pID){
    try {
      var flight = McCroskey.getFlight(pID);
      var plan = flight.plan;
      var i = McCroskey.getPlanIndex(pID,'sherwood.getAST');
      var prev = McCroskey.getPlanIndex(pID, 'slashColon.read');
      var ast, ext;
      ext = path.extname(flight.req.query.file);
      console.log('ext: ' +ext);
      if(ext === '.jsx'){
        ast = acornJSX.parse(plan[prev].manifest.returnPayload, Get('acornJSX'));
      }
      if(ext === '.js'){
        ast = acorn.parse(plan[prev].manifest.returnPayload, Get('acorn'));
      }
      //console.log(JSON.stringify(ast, null, 4));
/*
either by jsx file extension or by identified jsx directory


*/
      plan[i].manifest.returnPayload = ast;
      plan[i].complete = true;
      McCroskey.setFlight(pID,'plan',plan);
      McCroskey.tower(pID);
    } catch(e) {
      McCroskey.wrong({i:pID, m:'sherwood', f:'getAST', e:e});
    }
  }



  function getMap(pID){
    try {
      var flight = McCroskey.getFlight(pID);
      var plan = flight.plan;
      var i = McCroskey.getPlanIndex(pID,'sherwood.getMap');
      var prev = McCroskey.getPlanIndex(pID, 'slashColon.read');
      var ast, ext;
      ext = path.extname(flight.req.query.file);
      //console.log('ext: ' +ext);
      if(ext === '.jsx'){
        ast = acornJSX.parse(plan[prev].manifest.returnPayload, Get('acornJSX'));
        //console.dir(walkJSX.default);
        //walkJSX.default(ast, Get('walk'));
        walkJSX.default(plan[prev].manifest.returnPayload, Get('walk'));
      }
      if(ext === '.js'){
        ast = acorn.parse(plan[prev].manifest.returnPayload, Get('acorn'));
        walk.simple(ast, Get('walk'));
      }
      /*estraverse.traverse(ast, {
        enter: function(node){
          if (node.type === 'ImportDeclaration'){
            //console.log('Encountered assignment to', node.left.name);
            console.dir(node);
          }
        }
      });
      */





      plan[i].manifest.returnPayload = ast;
      plan[i].complete = true;
      McCroskey.setFlight(pID,'plan',plan);
      McCroskey.tower(pID);
    } catch(e) {
      McCroskey.wrong({i:pID, m:'sherwood', f:'getMap', e:e});
    }
  }

  ExposeFns({
		getAST:getAST,
    getMap:getMap
	});
});

module.exports = sherwood;

var McCroskey = require('./mccroskey');
