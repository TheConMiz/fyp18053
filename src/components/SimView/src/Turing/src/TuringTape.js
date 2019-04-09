function TuringTape(rawData){
    this.rawData = rawData;
    this.originalHeadPosition = -1;
    this.headPosition = -1;
}

TuringTape.prototype = {
    constructor: TuringTape,

    resetTape: () =>{
        this.headPosition = this.originalHeadPosition;
    }
}