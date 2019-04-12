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

class Controls extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const {classes} = this.props
        return(
            <Fragment>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary">
                    <Typography color="secondary">Next Step</Typography>
                </Button>

                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary">
                    <Typography color="secondary">Next Step</Typography>
                </Button>
                <TextField
                    id="standard-number"
                    label="Number"
                    // value={values.age}
                    // onChange={handleChange('age')}
                    color="secondary"
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"/>
            </Fragment>

        )
    }
}

export default withStyles(styles, {withTheme: true})(Controls)