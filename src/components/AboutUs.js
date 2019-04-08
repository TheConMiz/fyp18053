import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        minWidth: 500,
        flexGrow: 1,
        elevation7: true,
        height: 100
    }
})

class AboutUs extends React.Component{
    render(){
        const {classes} = this.props
        return(

            <Grid
                justify="center"
                container
                direction="column"
                alignItems="center" 
                >
                <Grid item>
                    <Paper className={classes.root}>
                        <Typography>
                            About Us
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles, {withTheme: true})(AboutUs)