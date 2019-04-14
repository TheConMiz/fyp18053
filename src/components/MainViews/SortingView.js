import React from 'react'

// Self-generated Sorting Simulator
import SortD3 from './sorting/SortD3'
class SortingView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // States for setting SVG dimensions in simulation component
            svgWidth      : 550,
            svgHeight     : 480,
        }
    }

    render(){   
        return(
            <SortD3
                width={this.state.svgWidth}
                height={this.state.svgHeight}
                light={this.props.light}/>
        )
    }
}

export default SortingView