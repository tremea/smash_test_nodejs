const http = require('http');
const app = require('./app');
const port = 3000;
app.set('port', port);




// ------------------------- Server HTTP ----------------------------------------------------- //
const server = http.createServer(app).listen(app.get('port'), function () {
  console.log('NodeJS - Porta: ' + app.get('port'));
  
});






