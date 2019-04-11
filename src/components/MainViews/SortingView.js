
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'

import SortD3 from './sorting/SortD3'

const styles = theme => ({

    controlPaper: {
        width : 570,
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
    },

    button: {
        margin: theme.spacing.unit,
    },

    divider: {
        margin: theme.spacing.unit * 2
    },
})

class SimView extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            svgWidth      : 550,
            svgHeight     : 480,
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
                    <SortD3
                        width={this.state.svgWidth}
                        height={this.state.svgHeight}
                        data={this.state.data}/>         
                </Grid>

                <Grid item>
                    <Paper
                        className={classes.controlPaper}
                        elevation={7}>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper
                        className={classes.controlPaper}
                        elevation={7}>

                        <Typography variant="h5">
                            Testing
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

export default withStyles(styles, {withTheme: true})(SimView)