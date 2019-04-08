import React, { Fragment } from 'react'

import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },

    dialog: {
        margin  : theme.spacing.unit,
        minWidth: 550,
        height  : 400
    }
})

class ArrayGenerationMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open     : false,
            userValue: [],
        };
    }


    handleMenuOpen = () => {
        this.setState(state => ({open: !this.state.open}))
        // console.log(this.state.userValue)
    }

    //TODO: FIGURE OUT HOW TO ALLOW FOR USER GENERATED INT ARRAYS
    handleDataChange = () => {
        console.log(this.state.userValue[0])
        // let tempArray = this.userValue.split(',');
        // console.log(tempArray)
        // this.props.handleNewData(this.state.userValue)
        this.handleMenuOpen();

    }

    render() {
        const {classes} = this.props;
        return(
            <Fragment>                
                
                <Button     variant = "contained" color = "primary" className = {classes.button} onClick = {this.handleMenuOpen}>
                <Typography color   = "secondary">
                        Generate Data
                    </Typography>
                </Button>

                <Dialog
                    className = {classes.dialog}
                    open      = {this.state.open}>

                    <DialogTitle>Generate Data</DialogTitle>

                    <DialogContent>
                        
                        <TextField
                            
                            color       = "primary"
                            placeholder = "eg. 1,2,3..."
                            label       = "Dataset Values"
                            margin      = "normal"
                            onChange    = {val => this.setState({userValue: val.target.value.split(",")})}>
                        </TextField>

                        <Button
                            onClick = {this.props.handleShuffleData}
                            color   = "secondary">
                                Shuffle
                        </Button>

                        <Button
                            onClick = {this.handleDataChange}
                            color   = "secondary">
                                Confirm
                        </Button>

                        <Button
                            color   = "secondary">
                                Special Cases
                        </Button>

                    </DialogContent>

                </Dialog>
            </Fragment>
        )
    }
}

export default withStyles(styles, {withTheme: true})(ArrayGenerationMenu) 

