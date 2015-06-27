var say = require('./say');
var espeak = require('./espeak');

// Lookup the current backend
function currentBackend() {
    // On OS X use "say"
    if(process.platform === 'darwin') {
        return say;
    }
    // On linux use "espeak"
    return espeak;
}

module.exports = currentBackend();
