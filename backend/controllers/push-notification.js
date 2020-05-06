let express = require('express');
WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 9090 });

module.exports.getNotification = function (req, res) {
    res.json({message: "hi"})
    console.log(req.query.name)
    
    wss.clients.forEach(function each(client) {
        data = req.query.name + " has checked in"
        client.send(data);
    });
}