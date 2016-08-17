/*
*
* Delete these notes once famliar and in production
* n: name. required.
*
* u: url. required.
* 	This is an array or url(s) for the script location.
* 	If it is a 3rd part library such as React or jQuery
* 	use a CDN to enhance loading performance.
* 	This offers redundancy in event location is unobtainable.
* 	The reason for this is Facbook can be stopped by a
* 	corporate firewall so fb.me for cdn may not work.
* 	suggestion for libraries is use
* 	['CDN1','CDN2','YourLocalServer']
*
* d: dependant. optional
* 	if a js file has to be loaded beforehand.
* 	use d:['name'] - name is the n value of the required script.
* 	i.e. React-DOM requires React to load.
*
* w: where. optional
* 	default location is script is attached to head(h).
* 	use w:'b' to append to body.
*
* t: type. optional.
* 	default is assigned as "text/javascript".
* 	Only populate if you want to have differnet type
* 	i.e. t: "text/jsx"
*
* i: integrity. optional.
* 	add in the hash valuse of the CDN library.
* 	see https://www.srihash.org/ and
* 	https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
* 	https://frederik-braun.com/using-subresource-integrity.html
* 	for more details.
*
* r: rel. optional.
*		used for stylesheets.
*
*
*/

var _WellyPayload = [
	{
		n:'jQuery',
		u:[
			'https://code.jquery.com/jquery-3.1.0.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js',
			'cdn_local/js/jquery.min.js',
			],
			i: 'sha384-nrOSfDHtoPMzJHjVTdCopGqIqeYETSXhZDFyniQ8ZHcVy08QesyHcnOUpMpqnmWq'
	},
	{
		n:'React',
		u:[
			'https://fb.me/react-15.3.0.js',
			'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.js',
			'cdn_local/js/react-15.3.0.js',
		],
		i: 'sha384-R8v794QN9hrNjnivoQ3Mf7nMGVwFIHBkUmBanB40ZBIMttZbBEUatXNosjytvPUC'
	},
	{
		n:'React-Dom',
		u:[
			'https://fb.me/react-dom-15.3.0.js',
			'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.js',
			'cdn_local/js/react-dom-15.3.0.js'
			],
		d:['React'],
		i: 'sha384-PKr8yTHUBD0chzmoJ6ZYtB1nB87GTEWPmuDlDV7iARDrYGki2fmVB0ae3vf3LX0O'
	},
	{
		n:'cruyff',
		u:['js/cruyff.js'],
		d:['React-Dom']
	},
	{
		n:'Bundle',
		u:['js/bundle.js'],
		d:['jQuery','cruyff']
	},
	{
		n:'menutree',
		u:['css/menutree.css'],
		r:'stylesheet'
	}
];

_Welly.boots(_WellyPayload);

/*
{
	n:'fontawesome',
	u:['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'],
	r:'stylesheet',
	i:'sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1'
},
{
	n:'bootstrap',
	u:['https://bootswatch.com/superhero/bootstrap.min.css'],
	r:'stylesheet'
}

*/
