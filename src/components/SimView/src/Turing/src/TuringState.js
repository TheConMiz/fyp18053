function TuringState (start, stateId, instruction, nextState, prevState) {
    this.startState = start;
    this.stateId = stateId;
    this.instruction = instruction;
    this.nextState = nextState;
    this.prevState = prevState;
}

TuringState.prototype = {
    constructor: TuringState,
    
    deleteState: this.stateId = 1,
}

