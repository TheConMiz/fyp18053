import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    paper: {
        width : 570,
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
    },

    button: {
        margin: theme.spacing.unit,
    },
})

class TuringControls extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const {classes} = this.props
        return(
            <Paper className={classes.paper}>
            
            </Paper>
        )
    }
}

export default withStyles(styles, {withTheme: true})(TuringControls)