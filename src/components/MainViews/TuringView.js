import React from 'react'

// Self-generated Turing Machine
import Turing from './turing/Turing'

class TuringView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <Turing
                light={this.props.light}/>
        )
    }
}

export default TuringView