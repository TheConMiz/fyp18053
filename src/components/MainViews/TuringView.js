import React from 'react'
import Turing from './turing/Turing'

class TuringView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            svgWidth      : 550,
            svgHeight     : 480,
        }
    }

    render(){
        return(

            <Turing
                width={this.state.svgWidth}
                height={this.state.svgHeight}
                light={this.props.light}/>
        )
    }
}

export default TuringView