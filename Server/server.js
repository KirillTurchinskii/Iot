var PORT = 44444;
var HOST = '192.168.1.59';

var log = require('winston');

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    log.info('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    log.info(remote.address + ':' + remote.port +' - ' + message);

});

server.bind(PORT, HOST);