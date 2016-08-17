/*jshint esversion:6 */
// ApiMod : Define simple API JS Modules.
//

/*
* Parameters
* n : name of the module
* f : the actual module function
*
* Purpose
* This function ApiMod has a function passed in as a parameter.
* The parameter function is called at the end,
* and has the functions below passed in as parameters.
*
* Important to all of this is the data variable.
* It is a plain JS object and is used as a store to store other name value pairs.
* Where the value can be any valid JSON, such as strings, numbers, array, objects.
*
* _GetVal : A getter function which returns the saught value.
* _SetVal : A setter function which sets the value.
* _Data : An function that adds the name value pair to the data object.
* _DataExists : Checks the name is already in the data object.
* _ExposeFns : A function which takes the passed in JS obect and makes those functions publicly available.
*
* This acts as a simple API, allowing the ApiMod to act as a module wrapper.
* Which allows for gettters, setters and exposing of functions to be available.
* All the data, if any is defined, is stored in the data object.
*
* f(_GetVal, _SetVal, _Data, _DataExists, _ExposeFns);
*
*
* This is the base API Module.
* It cannot have Multilingual or Error handling
* as it will cause a circular reference to itself
* ApiMod calls Herroford but Herroford calls ApiMod
* Only way around it is to merge ApiMod with Error handling.
* But this takes a simple elegant Api Module interface and mucks it up.
*/
function ApiMod(n,f){
//console.log('n: ' +n);
//console.log('f: ' +f);
	var self=this;
	var name=n;
	var data={};

	function _DataExists(n){
		return typeof data[n]!='undefined';
	}

	function _GetVal(n){
		if(!_DataExists(n)){
			console.log(name+'.Get; Value "' +n+ '" not defined');
			return '';
		}
		return data[n].val;
	}

	function _SetVal(n,v){
		if(!_DataExists(n)){
			console.log(name+'.Set; Value "' +n+ '" not defined');
			return '';
		}
		if(data[n].def && typeof v !== data[n].type){
			console.log(name+'.Set; Value "' +n+ '" new value is diff type to defined type');
			return '';
		}
		if(typeof v !== typeof data[n].val){
			console.log(name+'.Set; Value "' +n+ '" warning new value is diff type ');
		}
		data[n].val=v;
		return data[n].val;
	}

	function _GetObjType(p){
		switch (p.toLowerCase()) {
			case 'string':
				t = 'string';
				break;
			case 'number':
				t = 'number';
				break;
			case 'func':
			case 'function':
				t = 'function';
				break;
			case 'bool':
			case 'boolean':
				t = 'boolean';
				break;
			case 'symbol':
				t = 'symbol';
				break;
			default:
				t = 'object';
		}
		return t;
	}

	function _Data(n,v,d){
		if(_DataExists(n)){
			console.log(name+'.Data; Value "' +n+ '" already defined');
			return '';
		}

		var t,z;
		if(typeof d !=='string'){
			d ='notDefined';
		}
		if(d ==='notDefined'){
			z=false;
		}else{
			z=true;
		}

		t = _GetObjType(d);
		data[n]={val: v, type: t, def: z};
		return data[n].val;
	}

	function _ExposeFns(d){
		var i;
		for(i in d){
			if(typeof self[i]=='undefined'){
				self[i]=d[i];
			}else{
				console.log(name+'.ExposeFns; identifier "' +name+ '.' +i+ '" already exists.');
			}
		}
	}

	f(_GetVal, _SetVal, _Data, _DataExists, _ExposeFns);
}

//module.exports = new ApiMod();
module.exports = ApiMod;
