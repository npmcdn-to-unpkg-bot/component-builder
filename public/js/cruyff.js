// Cruyff : Ajax Manager. Handles clientside XmlHttpRequests
//
var Cruyff = new _ApiMod('Cruyff',function(Get, Set, Data, DataExists, ExposeFns){

	Data('xhr',{});
	Data('funcCB',function(){},'function');
	Data('active',false);

	function getXHR() {
		try {
			return new XMLHttpRequest();

		} catch( err ) {
			console.log( "getXHR error " +err.message );
		}
	}

	function theTurn() {
		try {
			var xhr = Get('xhr');
			//var OK = 200; // status 200 is a successful return.
			var cb;

			switch (xhr.readyState) {
				case 0:
					//console.log('UNITIALISED');
					break;
				case 1:
					//console.log('LOADING');
					break;
				case 2:
					//console.log('LOADED');
					break;
				case 3:
					Set('active',true);
					//console.log('INTERACTIVE');
					break;
				default:
					//console.log('COMPLETED');
					if(Get('active')){
						//if (xhr.status === OK) {
						if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
		            //console.log('Woo Yay! COMPLETED: ' + xhr.status);
								//cb = Get('funcCB');
								//cb(xhr.responseText);
								//console.log('funcCB' +Get('funcCB'));
								//console.log('xhr.responseText' +xhr.responseText);
								groundControl(Get('funcCB'), xhr.responseText);
		        } else {
		            console.log('Error COMPLETED: ' + xhr.status);
		        }

					}else{
						console.log('COMPLETED but did not go through stages properly');
						console.log('xhr.status: ' +xhr.status);
						console.log('xhr.responseText: ' +xhr.responseText);
					}
			}

		} catch( err ) {
			console.log( "theTurn error name: " +err.name);
			console.log( "message: " +err.message );
			console.log( "stack" );
			console.dir( err.stack);
		}
	}

	function getReq(pURL, pCB) {
		try {
			//console.log('getReq : ' +typeof pCB);
			var xhr = getXHR();
			Set('funcCB', pCB);
			Set('active',false);
			xhr.open('get',pURL,true);
			xhr.onreadystatechange = theTurn;
			xhr.send();
			Set('xhr', xhr);
		} catch( err ) {
			console.log( "getReq error " +err.message );
		}
	}

	function postReq(pURL, pCB, pData) {
		try {
			var xhr = getXHR();
			Set('funcCB', pCB);
			Set('active',false);
			xhr.open('post',pURL,true);
			xhr.onreadystatechange = theTurn;
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(pData);
			Set('xhr', xhr);
		} catch( err ) {
			console.log( "postReq error " +err.message );
		}
	}

	function groundControl(callback, p){
    callback(p);
  }

  ExposeFns({
    getReq:getReq,
		postReq:postReq
  });

});
