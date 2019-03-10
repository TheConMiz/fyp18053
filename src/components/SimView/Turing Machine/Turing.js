function TuringMachine(Instructions, tapeArray, endState, state, counter, cell, current)
{
    //I is instructions
    /*
    / tape is initial state of tape as a list -> contains all states,  
    / end is end state
    / start is start state
    / cell is cell of tape
    / current is current position of head
    / initial state
    */
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