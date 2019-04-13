import React from 'react'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import TuringTransitions from './TuringTransitions'
// import Controls from './Controls'

const styles = theme => ({
    paper: {
        // minWidth : 570,
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
    },

    button: {
        margin: theme.spacing.unit,
    },
})

class Turing extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
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

                    <Grid 
                        container
                        direction="column"
                        alignItems="center">

                            <Grid item>
                                <div>states, letters, and transitions</div>
                            </Grid>    
                            <Grid item>
                                <div>turing tape</div>
                            </Grid>
                    </Grid>

                </Grid>

                <Grid item>
                    <Paper className={classes.paper} elevation={7}>
                        Code view
                    </Paper>
                </Grid>

                <Grid item md={3} xs={6}>
                    <Paper className={classes.paper} elevation={7}>
                        Controls
                    </Paper>
                </Grid>

                <Grid item md={6} xs={12}>
                    <Paper className={classes.paper} elevation={7}>
                        References
                    </Paper>
                </Grid>


                {/* <Grid item md={3} xs={0}>
                    <div></div>
                </Grid>

                <Grid item md={6} xs={12}>
                    <Paper>
                        Tape

                    </Paper>
                </Grid>

                <Grid item md={3} xs={0}>
                    <div></div>
                </Grid>

                <Grid item md={3} xs={0}>
                    <div></div>
                </Grid>

                <Grid item md={6} xs={12}>
                    <Paper>
                        <Controls/>
                    </Paper>
                </Grid>

                <Grid item md={3} xs={0}>
                    <div></div>
                </Grid> */}

            </Grid>

        )
    }
}

export default withStyles(styles, {withTheme: true})(Turing)