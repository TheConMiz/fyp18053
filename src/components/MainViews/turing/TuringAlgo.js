import React from 'react'
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

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

class TuringAlgo extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const {classes} = this.props
        return(
            <Grid container>
                <Grid item>

                    <Paper>
                        <Grid container>
                            <Grid item>
                                <Typography>Previous State</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Read</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Next State</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Write</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Move</Typography>
                            </Grid>

                        </Grid>
                        
                    </Paper>

                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles, {withTheme: true})(TuringAlgo)