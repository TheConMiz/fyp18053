
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import SortD3 from './Simulations/Sorting/src/SortD3'


const styles = theme => ({
    root: {
        width: 570,
        height: 500,
        //marginTop: 85,
        //marginLeft: 75,
        //marginRight: 32.5
    }
})

class SimView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data: [12, 5, 6, 3, 9, 10, 2, 3],
            width: 550,
            height: 480,
            id: "test"
        }
    }



    render(){
        const {classes} = this.props
        return(
            <Paper className={classes.root} elevation={7}>
                <SortD3 data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id}></SortD3>
                <Divider/>
            </Paper>
            
            
        )
    }
}

export default withStyles(styles, {withTheme: true})(SimView)