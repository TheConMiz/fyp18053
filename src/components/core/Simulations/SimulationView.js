import React from 'react';
import Paper from 'paper';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/';

class SimulationView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div>
                <p>Canvas Space</p>
            </div>
        );
    }
}

export default SimulationView;