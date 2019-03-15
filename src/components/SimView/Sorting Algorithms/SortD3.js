import React from 'react';
import * as d3 from 'd3';
import Paper from '@material-ui/core/Paper';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: 570,
        height: 500,
        flexGrow: 1,
        marginTop: 85,
        marginLeft: 75
    }
})

class SortD3 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        const {classes, theme} = this.props
        return(
            <Paper className={classes.root} elevation={10}>
                <svg>

                </svg>
            </Paper>

        )
    }
}

export default withStyles(styles, {withTheme: true})(SortD3)