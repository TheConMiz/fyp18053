function Turing(startState, tape, change){
    this.state = startState
    this.tape = tape
    this.change = change
}

/*
function TuringMachine(Instructions, tapeArray, endState, state, counter, cell, current)
{
    counter = 0;
    while(state != endState) {
        cell = tapeArray[counter];
        current = (cell) ? Instructions[state][cell] : Instructions[state].B;
        if(!current)
            return false;
        tapeArray.splice(counter, 1, current.w);
        counter += current.m;
        state = current.n;
    }
    return tapeArray;
}
*/