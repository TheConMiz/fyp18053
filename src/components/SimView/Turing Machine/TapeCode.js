var _ = require('lodash/fp');

function Tape(input) {
    Object.defineProperty(this, 'blank', {
        value: blank,
        writable: false,
        enumerable: true
    });

    this.tape = {
        before: [],
        after: (input.length == 0 || input == null) ? [blank] : input.slice().reverse(),
        toString: function () {
            return this.before.join('') + '🔎' + this.after.slice().reverse().join('');
        }
    };
}

Tape.prototype.read = () => {

}

Tape.prototype.write = () => {
    
} 

Tape.prototype.goLeft = () => {

}

Tape.prototype.goRight = () => {
    
} 

