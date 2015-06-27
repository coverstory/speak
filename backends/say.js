var spawn = require('child_process').spawn;

function Say(msg, options) {
    if(!(this instanceof Say)) {
        return new Say(msg, options);
    }

    // Set attributes
    this.msg = msg || '';
    this.options = options || {
        voice: 'ava',
    };

    // Bind methods
    this.play = this.play.bind(this);
    this.save = this.save.bind(this);
}

// Play through audio hardware
Say.prototype.play = function(cb) {
    var say = spawn('say', [
        '-v', this.options.voice,
        this.msg,
    ]);

    say.stdin.write(this.msg);
    say.stdin.end();
};

// Saves to file
Say.prototype.save = function(filename, cb) {
    var say = spawn('say', [
        '-v', this.options.voice,
        '-o', filename,
        this.msg,
    ]);

    say.stdin.write(this.msg);
    say.stdin.end();
};

module.exports = Say;
