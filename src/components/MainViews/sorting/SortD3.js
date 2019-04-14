// Inspired by ...
// https://bl.ocks.org/alexmacy/770f14e11594623320db1270361331dc
// http://macr.ae/article/sorting-algorithms.html
// http://bl.ocks.org/andrewringler/3809399

import React from 'react'

// D3 is used as the primary animation engine
import * as d3 from 'd3'

// Material UI Components
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

// Self-generated
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
            // States for rendering sample simulations
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
    
    // Setter for determining bar chart portal dimensions
    setScales = (data) => {
        this.yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, this.props.height - 20])
        
        this.xScale = d3.scaleBand()
            .domain(d3.range(0, data.length))
            .range([0, this.props.width])
            .paddingInner(0.2)
    }

    // Function to stop a manually-started setInterval() operation
    stopLoop = () => {
        // Stop the setInterval() loop invoked to run the simulation
        clearInterval(this.loop)
        // Reset the loop variable for future use
        this.loop = {}
        // Reset bar chart coloring to its original state
        d3.select('.barChart').selectAll('rect').attr("class", "")
    }

    // Setter for the Play button
    setPlay = () => {
        this.setState({play: !this.state.play})
    }

    // Setter for changing scripts
    setScript = (newScript) => {
        this.setState({currentScript: newScript})
        console.log(this.state.currentScript)
    }
    
    // Setter for changing dataset size
    setDataSize = (newDataSize) => {
        this.setState({dataSize: newDataSize})
        console.log(this.state.dataSize)
    }
    
    // Setter for changing simulation speed
    setSpeed = (newSpeed) => {
        this.setState({speed: newSpeed})
        console.log(this.state.speed)
    }

    // Initialise a bar chart on page load
    initBarChart = (initData) => {
        // Determine chart dimensions
        this.setScales(initData)

        // Select the target SVG file, and draw rectangles with transition effects
        d3.select('.barChart').selectAll('rect').data(initData).enter().append('rect')

            .attr("x", (d,i) => this.xScale(i))            
            .attr('y', (d,i) => this.props.height - this.yScale(d))
            .attr("width", this.xScale.bandwidth())
            
            .transition()
            .duration(this.state.speed)
            
            .attr("height", (d,i) => this.yScale(d))
            .attr("id", (d, i) => "rect-" + i)
        
        // Append text indicating data value
        d3.select('.barChart').selectAll('text').data(initData).enter().append('text')
            .attr("x", (d,i) => this.xScale(i) + this.xScale.bandwidth() / 2)
            .attr('y', (d,i) => this.props.height - this.yScale(d) - 20)
            .attr("dy", "1em")
            .attr("opacity", 0.7)
            .attr("id", (d, i) => "label-" + i)
            .text((d) => {return d})
        
        // Set state to reflect changed data
        this.setState({data: initData})
    }

    // Function for randomising and generating new datasets
    shuffleBarChart = () => {

        // Prevents any data points from having a value of 0
        const randomData = d3.shuffle(d3.range(this.state.dataSize)).map(values => values + 1)

        this.setScales(randomData)

        // Remove the existing bar chart
        d3.select('.barChart').selectAll('rect').remove()
        d3.select('.barChart').selectAll('text').remove()

        // Initialise a new one in its place
        this.initBarChart(randomData)
    }

    // Bubble Sort animation
    bubbleSort = () => {
        let currentData = this.state.data.slice()
        
        this.setScales(currentData)
        let currentPos = 0
        let iteration = 0

        // Bubble Sort implementation
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

        // Function for animating transitions in the dataset
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

        // Insertion Sort implementation
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

        // Function for animating transitions in the dataset
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

        // Selection Sort implementation
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

        // Function for animating transitions in the dataset
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

        // Quick Sort implementation
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

                {/*Component housing target SVG file*/}
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
                {/* Component for posting source code*/}
                <Grid item>
                    <CodeView
                        light={this.props.light}
                        currentScript={this.state.currentScript}/>
                </Grid>

                {/* Component for handling simulation controls*/}
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

                {/* Component for handling references*/}
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

                        <Typography component="a" target="_blank" href="https://www.google.com">
                            THIS IS SOME TEXT
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