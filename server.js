const express = require('express');
const server = express();

server.all(`/`, (req, res) => {
    res.send(`I'm Online Now`);
});

function KeepAlive() {
    server.listen(3000, () => {
        console.log(`Server Is Ready On Port 3000!`);

    });
}

module.exports = KeepAlive;