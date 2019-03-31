import React from 'react'

import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import Divider from '@material-ui/core/Divider'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
})

class ScriptsViewMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    render() {
        const {classes} = this.props;
        return(
            <Button onClick={this.handleScriptsList} variant="contained" color="primary" className={classes.button}>
                <Typography color="secondary">
                    Select Script
                </Typography>
            </Button>
        )
    }
}

export default withStyles(styles, {withTheme: true})(ScriptsViewMenu) 

