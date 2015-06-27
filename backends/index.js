var say = require('./say');

// Lookup the current backend
function currentBackend() {
    return say;
}

module.exports = currentBackend();
