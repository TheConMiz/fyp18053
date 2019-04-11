import React from 'react';
import * as d3 from 'd3';


import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import {withStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'

//TODO: CHANGE CHART COLOUR LIGHT DARK MODE

import SortControls from './SortControls'

import './SortD3.css'

const styles = theme => ({
    simView: {
        width : 570,
        padding: theme.spacing.unit,
        flexGrow: 1
    },

    controlPaper: {
        width : 570,
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
    },

    button: {
        margin: theme.spacing.unit,
    },
})



class SortD3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            dataSize: 30,
            play: false,

            counter: 0,
            nextData: 1
        };

        // Initialise default dataset
        for (let i = 0; i < this.state.dataSize; ++i ){
            this.state.data.push(
                20 + Math.floor(Math.random() * 80)
            )
        }
    }

    componentDidMount(){
        this.initBarChart()
    }

    handlePlayPause = () => {
        this.setState({play: !this.state.play})
    } 

    initBarChart = () => {
        const tempData = this.state.data.slice()

        const xScale = d3.scaleBand()
            .domain(d3.range(0, tempData.length))
            .range([0, this.props.width])
            .paddingInner(0.2)
    
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(tempData)])
            .range([0, this.props.height - 20])

        d3.select('.barChart').selectAll('rect').data(tempData).enter().append('rect')

            .attr("x", (d,i) => xScale(i))            
            .attr('y', (d,i) => this.props.height - yScale(d))
            .attr("width", xScale.bandwidth())
            
            .transition()
            .duration(500) 
            
            .attr("height", (d,i) => yScale(d))
            .attr("id", (d, i) => "rect-" + i)
        
        d3.select('.barChart').selectAll('text').data(tempData).enter().append('text')
            .attr("class", "label")
            .attr("x", (d,i) => xScale(i) + xScale.bandwidth() / 2)
            .attr('y', (d,i) => this.props.height - yScale(d))
            .attr("dy", "1em")
            .attr("opacity", 0.7)
            .attr("id", (d, i) => "label-" + i)
            .text((d) => {return d})

    }

    randomiseBarChart = () => {
        const randomData = []
        
        for (let i = 0; i < this.state.dataSize; ++i ){
            randomData.push(
                20 + Math.floor(Math.random() * 80)
            )
        }

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(randomData)])
            .range([0, this.props.height - 20])

        d3.select('.barChart').selectAll('rect').data(randomData)
            .transition()
            .duration(500)
            .attr('y', (d,i) => this.props.height - yScale(d))
            .attr('height',(d,i) => yScale(d))
        
        d3.select('.barChart').selectAll('text').data(randomData)
            .attr("class", "label")
            .transition()
            .duration(500)
            .attr('y', (d,i) => this.props.height - yScale(d))
            .attr("dy", "1em")
            .text((d) => {return d})
    }

    shuffleBarChart = () => {

    }

    render() {
        const {classes} = this.props
        return(
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                spacing={24}>

                <Grid item>
                    <Paper
                        className={classes.simView}
                        elevation={7}>

                        <svg
                            width  = {this.props.width}
                            height = {this.props.height}>

                            <g className="barChart"/>
                    
                        </svg>
                    
                        <Divider/>
                
                    </Paper>
                
                </Grid>

                <Grid item>
                    <SortControls
                        randomiseBarChart={this.randomiseBarChart}
                        play={this.state.play}
                        handlePlayPause={this.handlePlayPause}
                        shuffleBarChart={this.shuffleBarChart}/>
                </Grid>
            
            </Grid>




        ) 
    }
}

export default withStyles(styles, {withTheme: true})(SortD3)