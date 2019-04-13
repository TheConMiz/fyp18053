import React from 'react'
import {withStyles} from '@material-ui/core/'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    tapePaper: {
        width: 570,
        flexGrow: 1,
        padding: theme.spacing.unit * 2
    }
})


class TuringTape extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cellButton: {
                width: 50, 
                height: 50
            }
        }
    }

    classes = this.props

    render(){
        const {classes} = this.props
        return(
            <Paper className={classes.tapePaper}>
                <AddCell/>
            </Paper>
        )
    }
}

function AddCell(props) {
    return(
        <Button>
            Hello
        </Button>
    )
}

export default withStyles(styles, {withTheme: true})(TuringTape)