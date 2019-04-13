//TODO:Credits to Macrae, and the D3 people

import React from 'react'
import * as d3 from 'd3'


import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'

import SortControls from './SortControls'

import CodeView from './CodeView'

import cssStyles from './SortD3.css'

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

    codeView: {
        width: 570,
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
            speed: 250,
            currentScript: "Bubble",
            scripts: ["Bubble", "Insertion", "Quick", "Selection"]
        }
        // Randomly initialise dataset 
        this.state.data = d3.shuffle(d3.range(this.state.dataSize)).map(values => values + 1)
        this.setScript = this.setScript.bind(this)
    }

    // Initialise a bar chart when the page is opened
    componentDidMount(){
        this.initBarChart(this.state.data.slice())
    }

    /*Common-use variables*/
        loop = []
        xScale = []
        yScale = []
    /*-------------------*/
    
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

        // Reset the loop variable for future use
        this.loop = {}
        // Reset bar chart coloring to its original state
        d3.select('.barChart').selectAll('rect').attr("class", "")
    }

    setPlay = () => {
        this.setState({play: !this.state.play})
    }

    setScript = (newScript) => {
        this.setState({currentScript: newScript})
        console.log(this.state.currentScript)
    }
    
    setDataSize = (newDataSize) => {
        this.setState({dataSize: newDataSize})
        console.log(this.state.dataSize)
    }
    
    setSpeed = (newSpeed) => {
        this.setState({speed: newSpeed})
        console.log(this.state.speed)
    }

    initBarChart = (initData) => {

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
        
        this.setState({data: initData})
    }

    shuffleBarChart = () => {

        const randomData = d3.shuffle(d3.range(this.state.dataSize)).map(values => values + 1)

        this.setScales(randomData)

        d3.select('.barChart').selectAll('rect').remove()
        d3.select('.barChart').selectAll('text').remove()

        this.initBarChart(randomData)
    }

    bubbleSort = () => {
        let currentData = this.state.data.slice()
        
        this.setScales(currentData)
        let currentPos = 0
        let iteration = 0

        const bubbleSortLoop = () => {
            if (iteration >= currentData.length - 1) {
                return
            }

            if (currentPos === currentData.length - 1 - iteration) {
                currentPos = 0
                ++iteration
            }
        
            if (currentData[currentPos] > currentData[currentPos + 1]) {
                [currentData[currentPos], currentData[currentPos + 1]] = [currentData[currentPos + 1], currentData[currentPos]]
            }
        
            ++currentPos
        }

        this.loop = setInterval(() => {
        
            bubbleSortLoop()

            d3.select('.barChart').selectAll('rect')
                .data(currentData, (d) => d)
                .classed('activeBubble', (d, i) => i === currentPos || i + 1 === currentPos)
                .classed('completedBubble', (d, i) => i >= currentData.length - iteration)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i))
            
            d3.select('.barChart').selectAll('text').data(currentData, (d) => d)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i) + this.xScale.bandwidth() / 2)
        
        }, this.state.speed)

        this.setState({data: currentData})
    }

    insertionSort = () => {

        let currentData = this.state.data.slice()

        this.setScales(currentData)

        let currentPos = 1
        let complete = 1

        let resetTest = false

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

            insertionSortLoop()

            d3.select('.barChart').selectAll('rect')
                .data(currentData, (d) => d)
                .classed('activeInsertion', (d, i) => complete <= currentData.length && (i === currentPos + 1 || i === currentPos))
                .classed('completedInsertion', (d, i) => i < complete)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i))

            d3.select('.barChart').selectAll('text').data(currentData, (d) => d)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i) + this.xScale.bandwidth() / 2)
        }, this.state.speed)

        this.setState({data: currentData})
    }

    selectionSort = () => {
        let currentData = this.state.data.slice()
        
        this.setScales(currentData)

        let sorted = 0
        let currentPos = 0
        let min = 0
        let reset = false

        const selectionSortLoop = () => {

            if (sorted === currentData.length) {
                return
            }
            
            if (reset) {
                reset = false
                min = currentPos = sorted
            }
            
            ++currentPos
            
            if (currentData[currentPos] < currentData[min]) {
                min = currentPos
            }
            
            if (currentPos === currentData.length - 1) {
                [currentData[sorted], currentData[min]] = [currentData[min], currentData[sorted]]
                
                ++sorted
                reset = true
            }

            if (sorted === currentData.length - 1) {
                ++sorted
            }
        }

        this.loop = setInterval(() => {

            selectionSortLoop()

            d3.select('.barChart').selectAll('rect')
                .data(currentData, (d) => d)
                .classed('activeSelection', (d, i) => sorted !== currentData.length && (i === currentPos || i === min))
                .classed('completedSelection', (d, i) => i < sorted)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i))
            
            d3.select('.barChart').selectAll('text').data(currentData, (d) => d)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i) + this.xScale.bandwidth() / 2)

        }, this.state.speed)

        this.setState({data: currentData})
    }

    quickSort = () => {

        let currentData = this.state.data.slice()

        this.setScales(currentData)

        let toSort = [[0, currentData.length - 1]]
        let sorting
        let pivot

        let l, r

        const quickSortLoop = () => {
            if (!sorting) {
                if (!toSort.length) {
                    return
                }
                
                sorting = toSort.shift()
                pivot = sorting[0] + Math.floor((sorting[1] - sorting[0]) * Math.random())
                
                l = sorting[0]
                r = sorting[1]
            }
        
            if (l === r) {
                if (pivot - 1 - sorting[0] > 0) {
                    toSort.push([sorting[0], pivot - 1])
                }
                
                if (sorting[1] - (pivot + 1) > 0) {
                    toSort.push([pivot + 1, sorting[1]])
                }
            
                l = r = sorting = pivot = undefined
            
                quickSortLoop()
                return
            }
        
            if (currentData[l] < currentData[pivot]) {
                ++l
                return
            }
        
            if (currentData[r] > currentData[pivot]) {
                --r
                return
            }
        
            [currentData[l], currentData[r]] = [currentData[r], currentData[l]]
        
            if (pivot === l) {

                pivot = r
            } 
            
            else if (pivot === r) {
                pivot = l
            }
        }

        this.loop = setInterval( () => {
            quickSortLoop()

            d3.select('.barChart').selectAll('rect')
                .data(currentData, (d) => d)
                .classed('activeQuick', (d, i) => sorting && (i >= sorting[0] && i <= sorting[1]))
                .classed('pivotQuick', (d, i) => i === pivot)
                .classed('highlightQuick', (d, i) => i === r || i === l)
                .classed('completedQuick', (d, i) => isCompleted(i))
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i))

            d3.select('.barChart').selectAll('text').data(currentData, (d) => d)
                .transition()
                .duration(this.state.speed)
                .attr('x', (d, i) => this.xScale(i) + this.xScale.bandwidth() / 2)
            }, this.state.speed)

            function isCompleted(i) {

                if (!sorting && !toSort.length) {
                    return true
                }

                return [sorting].concat(toSort).every(([l, r]) => i < l || r < i)
            }

            this.setState({data: currentData})
    }

    render() {
        const {classes} = this.props
        return(
            <Grid
                container
                direction="row"
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
                    <CodeView
                        light={this.props.light}
                        currentScript={this.state.currentScript}/>
                </Grid>

                <Grid item>
                    <SortControls
                        stopLoop={this.stopLoop}
                        shuffleBarChart={this.shuffleBarChart}
                        
                        play={this.state.play}
                        setPlay={this.setPlay}

                        speed={this.state.speed}
                        dataSize={this.state.dataSize}
                        setSpeed={this.setSpeed}
                        setDataSize={this.setDataSize}

                        bubbleSort={this.bubbleSort}
                        insertionSort={this.insertionSort}
                        mergeSort={this.mergeSort}
                        selectionSort={this.selectionSort}
                        quickSort={this.quickSort}


                        scripts={this.state.scripts}
                        currentScript={this.state.currentScript}
                        setScript={this.setScript}/>
                </Grid>

                <Grid item>
                    <Paper
                        className={classes.controlPaper}
                        elevation={7}>

                        <Typography color="secondary" variant="h5" gutterBottom>
                            References
                        </Typography>

                        <Typography component="a" target="_blank" href="https://www.google.com">
                            THIS IS SOME TEXT
                        </Typography>

                    </Paper>
                </Grid>
            </Grid>
        ) 
    }
}

export default withStyles(styles, {withTheme: true})(SortD3)