function TuringTape(inputTape){
    this.tape = inputTape
    this.read = () => {}
    this.write = () => {}
    this.move = () => {}
    this.reset = () => {}
    this.clear = (tape) => {console.log(tape[1])}
}

export default TuringTape