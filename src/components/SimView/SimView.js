
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import SortD3 from './Simulations/Sorting/SortD3'


const styles = theme => ({
    root: {
        width: 570,
        height: 500,
    }
})

class SimView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    render(){
        const {classes} = this.props
        //console.log(this.props.match.url)
        return(
            
            <Paper className={classes.root} elevation={7}>
                <SortD3 className="test"></SortD3>
                <Divider/>
            </Paper> 
        )
    }
}

export default withStyles(styles, {withTheme: true})(SimView)