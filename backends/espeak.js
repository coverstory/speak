var spawn = require('child_process').spawn;

function Espeak(msg, options) {
    if(!(this instanceof Espeak)) {
        return new Espeak(msg, options);
    }

    // Set attributes
    this.msg = msg || '';
    this.options = options || {
        voice: 'english',
    };

    // Bind methods
    this.play = this.play.bind(this);
    this.save = this.save.bind(this);
}

// Play through audio hardware
Espeak.prototype.play = function(cb) {
    var say = spawn('espeak', [
        '--stdin',
        '-v', this.options.voice
    ]);

    // Handle exit
    say.once('close', cb);

    // Write message
    say.stdin.write(this.msg);
    say.stdin.end();
};

// Saves to file
Espeak.prototype.save = function(filename, cb) {
    var say = spawn('espeak', [
        '--stdin',
        '-v', this.options.voice,
        '-w', filename
    ]);

    // Handle exit
    say.once('close', cb);

    // Write message
    say.stdin.write(this.msg);
    say.stdin.end();
};

module.exports = Espeak;
