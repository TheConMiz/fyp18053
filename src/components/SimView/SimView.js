
import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import SortD3 from './src/Sorting/SortD3'
import CodeView from '../CodeView/CodeView';
import ControlPanel from '../CodeControls/ControlPanel'

import * as d3 from 'd3'


const styles = theme => ({
    root: {
        width: 570,
        height: 500,
    }
})

class SimView extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            width: 550,
            height: 480,
            data: d3.range(30).map(Math.random),
            play: false,
            prevClicked: 1,
            nextClicked: 1,
            script: ""
        }
    }

    shuffleData = () =>{
        let newData = d3.shuffle(this.state.data);
        this.setState(state => ({data: newData}));
    }

    // Leverage D3 library to handle shuffling of dataset
    // handleShuffleData = () => {
    //     let newData = d3.shuffle(this.state.data);
    //     this.setState(state => ({data: newData}));
    // }

    // handleNewData = (newData) => {
    //     this.setState({data: newData})   
    // }

    handlePlayPause = () => {
        this.setState({play: !this.state.play})
        console.log("Play: " + this.state.play)
    }

    render(){
        const {classes} = this.props
        return(
            <Fragment>
                <Paper className={classes.root} elevation={7}>
                    <svg
                        width  = {this.state.width}
                        height = {this.state.height}>

                        <SortD3
                            data={this.state.data}/>

                        <Divider/>
                        
                    </svg>

                </Paper>

                <ControlPanel
                    play={this.state.play}
                    handlePlayPause={this.handlePlayPause}/>

            </Fragment>

        )
    }
}

export default withStyles(styles, {withTheme: true})(SimView)