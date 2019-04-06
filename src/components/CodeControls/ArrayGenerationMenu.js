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
        margin: theme.spacing.unit,
        minWidth: 550,
        height: 400
    }
})

class ArrayGenerationMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes} = this.props;
        return(
            <Fragment>                
                
                <Button variant="contained" color="primary" className={classes.button}>
                    <Typography color="secondary">
                        Generate Data
                    </Typography>
                </Button>

                <Dialog
                className={classes.dialog}>

                    <DialogTitle>Generate Data</DialogTitle>

                    <DialogContent>
                        
                        <TextField
                            color="primary"
                            placeholder="1,2,3..."
                            label="Dataset Values"
                            margin="normal">
                        </TextField>

                        <Button
                            onClick={this.handleRandomisation}
                            color="secondary">
                                Randomise
                        </Button>

                        <Button
                
                            color="secondary">
                                Confirm
                        </Button>

                    </DialogContent>

                </Dialog>
            </Fragment>
        )
    }
}

export default withStyles(styles, {withTheme: true})(ArrayGenerationMenu) 

