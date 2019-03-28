import TuringState from './TuringState'

function TuringMachine(turingStates, tape, description){
    this.states = turingStates;
    this.tape = tape;
    this.currentState = -1;
    this.prevState = -1;
    this.nextState = -1;
    this.description = "";
}


TuringMachine.prototype = {
    constructor: TuringMachine,

    resetMachine: () =>{
        this.currentState = -1;
        this.tape.resetTape();
    },

    
}



