import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper'

import CodeView from './src/CodeView'


const styles = theme => ({
    //Material UI Styling
    codeView: {
        flexGrow: 1,
        width: 570,
        height: 500,
        padding: theme.spacing.unit,
    },
})


class CodePortal extends React.Component{

    constructor(props){
        super(props)
        this.state={
            currentPage: 1,

        }
    }

    render(){
        const {classes} = this.props
        return(
            <Paper className={classes.codeView} elevation={7}>
                {/* <AppBar position="static" color="secondary" >
                <Tabs>
                    <Tab label="Code" />
                    <Tab label="Console" />
                    
                </Tabs>
                </AppBar> */}
                <div></div>

                <CodeView light={this.props.light}/>

            </Paper>
            
        )
    }
}

export default withStyles(styles, {withTheme: true})(CodePortal) 