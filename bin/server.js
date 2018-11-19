const app = require('../src/app');
const port = normalizaPort(process.env.PORT || '3000');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
let server = app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})

let io = require('socket.io').listen(server);

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
});