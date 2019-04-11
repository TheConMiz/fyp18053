//TODO:Credits to Macrae, and the D3 people

import React from 'react';
import * as d3 from 'd3';


import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import {withStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'

import SortControls from './SortControls'

import './SortD3.css'

// Styling specifications for the Material UI components
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
            dataSize: 10,
            play: false,
            stepCount: 0,
            speed: 500,
            currentScript: "Bogo",
            scripts: ["Bogo", "Bubble", "Insertion", "Quick", "Merge", "Selection"]
        };

        // Randomly initialise dataset 
        this.state.data = d3.shuffle(d3.range(this.state.dataSize)).map(values => values + 1)
    }

    // Initialise a bar chart when the page is opened
    componentDidMount(){
        this.initBarChart()
    }

    /*Common-use variables*/
        loop
        xScale
        yScale
    /*-------------------*/

    setScript = (script) => {
        this.setState({currentScript: script})
    }
    setScales = (data) => {

        this.yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, this.props.height - 20])
        
        this.xScale = d3.scaleBand()
            .domain(d3.range(0, data.length))
            .range([0, this.props.width])
            .paddingInner(0.2)
    }

    stopLoop = () => {
        // Stop the setInterval() loop invoked to run the simulation
        clearInterval(this.loop)

        // Reset bar chart coloring to its original state
        this.loop = []
        
        d3.select('.barChart').selectAll('rect').attr("class", "")
    }


    initBarChart = () => {
        const initData = this.state.data.slice()

        this.setScales(initData)

        d3.select('.barChart').selectAll('rect').data(initData).enter().append('rect')

            .attr("x", (d,i) => this.xScale(i))            
            .attr('y', (d,i) => this.props.height - this.yScale(d))
            .attr("width", this.xScale.bandwidth())
            
            .transition()
            .duration(this.state.speed) 
            
            .attr("height", (d,i) => this.yScale(d))
            .attr("id", (d, i) => "rect-" + i)
        
        d3.select('.barChart').selectAll('text').data(initData).enter().append('text')
            .attr("x", (d,i) => this.xScale(i) + this.xScale.bandwidth() / 2)
            .attr('y', (d,i) => this.props.height - this.yScale(d) - 20)
            .attr("dy", "1em")
            .attr("opacity", 0.7)
            .attr("id", (d, i) => "label-" + i)
            .text((d) => {return d})
    }

    shuffleBarChart = () => {
        const randomData = d3.shuffle(this.state.data.slice())

        this.setScales(randomData)

        d3.select('.barChart').selectAll('rect').data(randomData)
            .transition()
            .duration(400)
            .attr('y', (d,i) => this.props.height - this.yScale(d))
            .attr('height',(d,i) => this.yScale(d))
        
        d3.select('.barChart').selectAll('text').data(randomData)
            .transition()
            .duration(400)
            .attr('y', (d,i) => this.props.height - this.yScale(d) - 20)
            .attr("dy", "1em")
            .text((d) => {return d})
        
        //Reset the data state
        this.setState({data: randomData})
    }

    //Bubble Sort: Done
    bubbleSort = () => {
        
        let currentData = this.state.data.slice()

        let currentPos = 0;
        let iteration = 0;

        const bubbleSortLoop = () => {
            if (iteration >= currentData.length - 1) {
                return;
            }

            if (currentPos === currentData.length - 1 - iteration) {
                currentPos = 0;
                iteration++;
            }
        
            if (currentData[currentPos] > currentData[currentPos + 1]) {
                [currentData[currentPos], currentData[currentPos + 1]] = [currentData[currentPos + 1], currentData[currentPos]]
            }
        
            currentPos++;
        }

        this.loop = setInterval(() => {
        
            bubbleSortLoop();

            d3.select('.barChart').selectAll('rect')
                .data(currentData, (d) => d)
                .classed('active', (d, i) => i === currentPos || i + 1 === currentPos)
                .classed('completed', (d, i) => i >= currentData.length - iteration)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i));
            
            d3.select('.barChart').selectAll('text').data(currentData, (d) => d)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i) + this.xScale.bandwidth() / 2)
        
        }, this.state.speed);

        this.setState({data: currentData})
    }

    //TODO: Insertion Sort
    insertionSort = () => {

        //TODO: .classed for active isn't working
        let currentData = this.state.data.slice()

        let currentPos = 1;
        let complete = 1;

        let resetTest = false;

        const insertionSortLoop = () => {
            
            if (resetTest || currentPos === 0) {
                currentPos = complete
                resetTest = false
            }

            if (complete > currentData.length) {
                return
            }
                    
            if (currentData[currentPos] < currentData[currentPos - 1]) {
                [currentData[currentPos], currentData[currentPos - 1]] = [currentData[currentPos - 1], currentData[currentPos]]
            } 
        
            else {
                resetTest = true
            }
        
            if (currentPos === complete) {
                ++complete
            }

            --currentPos
        }

        this.loop = setInterval(() => {

            insertionSortLoop();

            d3.select('.barChart').selectAll('rect')
                .data(currentData, (d) => d)
                .classed('active', (d, i) => (i === currentPos || i === currentPos + 1))
                .classed('completed', (d, i) => i < complete)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i));

            d3.select('.barChart').selectAll('text').data(currentData, (d) => d)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i) + this.xScale.bandwidth() / 2)
        }, 500);

        this.setState({data: currentData})

    }



    //TODO: Quick Sort
    //TODO: Merge Sort
    mergeSort = () => {
        let data = d3.range(60);

        for (let di = data.length; di; di--) {
        let j = Math.floor(Math.random() * di);
        [data[di - 1], data[j]] = [data[j], data[di - 1]];
        }

        data = data.map((d) => [d]);

        const data2 = [];

        let pass = 0;
        let n = 0;
        let i = 0;
        let j = 0;

        function iterate() {
        if (Math.max(data.length, data2.length) === 1) {
            return;
        }

        const from = pass % 2 === 0 ? data : data2;
        const to = pass % 2 === 0 ? data2 : data;

        if (i === 0 && j === 0) {
            to.push([]);
        }
        
        const bucketA = from[n * 2];
        const bucketB = from[n * 2 + 1] || [];
        
        if (j >= bucketB.length || bucketA[i] < bucketB[j]) {
            to[to.length - 1].push(bucketA[i]);
            bucketA[i] = null;
            i++;
        } else {
            to[to.length - 1].push(bucketB[j]);
            bucketB[j] = null;
            j++;
        }
        
        if (i >= bucketA.length && j >= bucketB.length) {
            n++;
            
            if (n >= from.length / 2) {
            from.splice(0, from.length);
            pass++;
            n = 0;
            }

            i = j = 0;
        }
        }

        function flatten(ary) {
        return ary.reduce((newAry, item) => {
            return newAry.concat(Array.isArray(item) ? flatten(item) : item);
        }, []);
        }

        const svg = d3.select('svg');
        const width = svg.attr('width');
        const height = svg.attr('height');

        const xScale = d3.scaleBand()
        .domain(d3.range(data.length))
        .rangeRound([50, width - 5])
        .paddingInner(0.5);

        const yScale = d3.scaleLinear()
        .domain(d3.extent(data, ([d]) => d))
        .range([30, height / 2 - 15]);

        const displayAry = flatten(data).map((d, i) => ({ d, i, set: 0 }));

        svg.selectAll('rect')
        .data(displayAry, ({ d }) => d)
        .enter()
            .append('rect')
            .attr('x', ({ i }) => xScale(i))
            .attr('y', ({ d, set }) => set === 0 ? height / 2 - yScale(d) - 1 : height / 2 + 1)
            .attr('width', xScale.bandwidth())
            .attr('height', ({ d }) => yScale(d));

        setInterval(function () {
        iterate();
        
        const displayAry = flatten(data).map((d, i) => ({ d, i, set: 0 }))
            .concat(flatten(data2).map((d, i) => ({ d, i, set: 1 })))
            .filter(({ d }) => d !== null);

        svg.selectAll('rect')
            .data(displayAry, ({ d }) => d)
            .transition()
            .duration(100)
            .attr('class', pass === 5 ? 'completed' : '')
            .attr('x', ({ i }) => xScale(i))
            .attr('y', ({ d, set }) => set === 0 ? height / 2 - yScale(d) - 1 : height / 2 + 1)
        }, 100);
    }
    //TODO: Selection Sort
    //TODO: Monkey Sort


    handlePlayPause = () => {
        this.setState({play: !this.state.play})
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
                        shuffleBarChart={this.shuffleBarChart}
                        play={this.state.play}
                        handlePlayPause={this.handlePlayPause}
                        bubbleSort={this.bubbleSort}
                        insertionSort={this.insertionSort}
                        resetBarChart={this.resetBarChart}
                        stopLoop={this.stopLoop}
                        scripts={this.state.scripts}
                        setScript={ () => this.setScript()}/>
                </Grid>
            </Grid>
        ) 
    }
}

export default withStyles(styles, {withTheme: true})(SortD3)