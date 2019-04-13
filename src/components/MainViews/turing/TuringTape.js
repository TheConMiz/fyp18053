import React from 'react'
import {withStyles} from '@material-ui/core/'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import Divider from '@material-ui/core/Divider'

const styles = theme => ({
    tapePaper: {
        maxWidth: 900,
        padding: theme.spacing.unit * 1.5,
        flexGrow: 1
    },
    button: {
        margin: theme.spacing.unit,
        width: 10,
        height: 50 
    },
})


class TuringTape extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    classes = this.props

    render(){
        const {classes} = this.props
        return(
            <Paper className={classes.tapePaper}>
                <Divider/>
                {this.props.tapeArray.map((text, id) => (
                    <Button
                        className={classes.button}
                        key={id} 
                        color={id === this.props.startTapePosition ? "primary": "secondary"}
                        variant="contained"
                        onClick={() => this.props.changeCell(id)}>
                            {text === "blank" ? "" : text}
                        </Button>
                ))}
                <Divider/>
            </Paper>
        )
    }
}

export default withStyles(styles, {withTheme: true})(TuringTape)