import React from 'react'
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import CodeView from './CodeView'
import Grid from '@material-ui/core/Grid'
import TuringControls from './TuringControls'

import './Tape.css'

import * as d3 from 'd3'

const styles = theme => ({
    simView: {
        width : 570,
        padding: theme.spacing.unit,
    },

    button: {
        margin: theme.spacing.unit,
    },

    refPaper: {
        width: 570,
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
    }
})

class TuringD3 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            //tape: [],
            data: "________",
            states: [
                {
                    'name': "q0",
                    'cond': "_",
                    "write": "0",
                    'move': "R",
                    'next': "q1"
                },
    
                {
                    'name': "q1",
                    'cond': "_",
                    "write": "_",
                    'move': "R",
                    'next': "q2"
                },
    
                {
                    'name': "q2",
                    'cond': "_",
                    "write": "1",
                    'move': "R",
                    'next': "q3"
                },
    
                {
                    'name': "q1",
                    'cond': "_",
                    "write": "_",
                    'move': "R",
                    'next': "q2"
                }
            ],

            cellWidth: 40,
            cellHeight: 50,
            scripts: ["Endless 1/0", ""]
        }
    }

    //
    xScale
    yScale
    radius = 15

    componentDidMount(){
        this.initTape()
        this.endlessBinary()
        this.initChart(this.state.states)
    }

    initTape = () => {

        for (let i = 0; i < 30; ++i){
            d3.select('.tape').append('rect').datum(null)
                .attr("class", "tape_cell")
                .attr("width", this.state.cellWidth)
                .attr('height', this.state.cellHeight)
                .classed("head", i === Math.floor(30 / 2))
                .attr('x', this.props.width - (i)*40 - 20)
                .attr('y', this.props.height - 50)
        }
    }

    initChart = (initStates) => {
        d3.select('.tape').selectAll('circle').data(initStates).enter().append()
            .attr('r', this.radius)
            .attr('cx', this.props.width - 50)
            .attr('cy', this.props.width - 100)
            .style('fill', "green")
    }

    endlessBinary = () => {
        let states = [
            {
                'name': "q0",
                'cond': "_",
                "write": "0",
                'move': "R",
                'next': "q1"
            },

            {
                'name': "q1",
                'cond': "_",
                "write": "_",
                'move': "R",
                'next': "q2"
            },

            {
                'name': "q2",
                'cond': "_",
                "write": "1",
                'move': "R",
                'next': "q3"
            },

            {
                'name': "q1",
                'cond': "_",
                "write": "_",
                'move': "R",
                'next': "q2"
            }
        ]

        console.log(states)
    }

    render(){
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

 
                            <g className="tape"/>
                        </svg>
                        <Divider/>
                    </Paper>
                </Grid>

                <Grid item>
                    <CodeView
                        light={this.props.light}/> 
                </Grid>

                <Grid item>
                    <TuringControls/>
                </Grid>

                <Grid item>
                    <Paper
                        className={classes.refPaper}
                        elevation={7}>

                        <Typography color="secondary" variant="h5" gutterBottom>
                            References
                        </Typography>

                        <Typography>
                            THIS IS SOME TEXT
                        </Typography>

                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles, {withTheme: true})(TuringD3)