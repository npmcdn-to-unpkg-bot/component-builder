var express = require('express');
var path = require('path');
var LondonBus = require('./apimods/londonbus');
var app = express();

app.use(express.static(path.join(__dirname +'/public')));

app.get('/', express.static(path.join(__dirname +'/public/index.html')));
app.get('/files', LondonBus.getDirList);
app.get('/drivemenu', LondonBus.getDriveMenu);
app.get('/appmap', LondonBus.getAppMap);
app.get('/deliberr', LondonBus.getDelibErr);

app.listen(3000, function () {
  console.log('Compo_tree listening on port 3000!');
});
