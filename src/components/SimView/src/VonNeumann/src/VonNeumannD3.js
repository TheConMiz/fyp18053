import React from 'react';
import * as d3 from 'd3';

var radius = 20;

class VonNeumannD3 extends React.Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <rect
                className="rect"
                width={550}
                height={480}
                stroke="#000"
                strokeWidth={5}
                fill="blue"
            />
        );
    }
}

export default VonNeumannD3;