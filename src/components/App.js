import React from 'react';

// Self-generated components
import AppDrawer from './AppDrawer/AppDrawer';
import CodeView from './CodeView/CodeView';
import InfoCard from './temp/InfoCard/InfoCard';
import ControlPanel from './CodeControls/ControlPanel';
import SimView from './SimView/SimView';

import * as d3 from 'd3'

// Material UI Components
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';

// React Router components
// import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

// Base Theme files
import lightTheme from './baseThemes/lightTheme'
import darkTheme from './baseThemes/darkTheme'

const lTheme = createMuiTheme(lightTheme);
const dTheme = createMuiTheme(darkTheme);

const styles = theme => ({
    root: {
        flexGrow: 1
    },
})

class App extends React.Component {

    // Constructor for the Base App
    constructor(props){
        super(props);
        this.state = {
            // Prop for handling changes from Light theme to Dark theme, and vice versa
            light: true,
            // Prop for handling activation and deactivation of Helper mode
            helper: false,
            
            data: [12, 5, 4, 8, 9, 16, 23, 12, 12, 5, 2, 8, 9, 16, 23, 12, 1, 1, 1],
            // Prop for list of pages
            modes: ["Turing", "von Neumann", "Sorting"]
        };
        // Bind the theme change handler to the App Component
        this.handleLightChange = this.handleLightChange.bind(this);
        this.handleHelperChange = this.handleHelperChange.bind(this);
    }

    // Handles change of theme from Light Mode to Dark Mode
    handleLightChange = () =>{
        this.setState(state => ({light: !this.state.light}));
        console.log("Light: " + this.state.light);
    }

    // Handles (de)activation of Helper Mode
    handleHelperChange = () =>{
        this.setState(state => ({helper: !this.state.helper}));
        console.log("Helper: " + this.state.helper);
    }

    handleRandomData = () => {
        // let min     = 1;
        // let max     = 750;
        // let length = Math.floor()
        // let newData = new Array();
        // for (let i = 0; i < this.state.data.length; ++i){

        //     newData.push(Math.floor(Math.random() * (max - min + 1) + min))
        // }
        // this.setState(state => ({data: newData}));

        let newData = d3.shuffle(this.state.data);
        this.setState(state => ({data: newData}));
    }

    handleDataShuffle = () => {
        let data = d3.shuffle(this.state.data);
        return data.map((d, i) => ({ id: i, value: d }));
      }

    // Save Light/Dark theme, and Helper mode choice in local storage
    // Save Helper Mode choice in local storage
    componentWillMount(){
        localStorage.getItem('light') && this.setState({
            light: JSON.parse(localStorage.getItem('light')),
            helper: JSON.parse(localStorage.getItem('helper')),
            // dataset: JSON.parse(localStorage.getItem('dataset'))
        })
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('light', JSON.stringify(nextState.light))
        localStorage.setItem('helper', JSON.stringify(nextState.helper))
        // localStorage.setItem('dataset', JSON.stringify(nextState.data))
    }
    
    render() {

        const {classes} = this.props;

        // RegEx for handling Routing
        // const homePageRegex = new RegExp('/$');
        // const otherPagesRegex = new RegExp('/.[a-z]+.[a-z]+');

        return (

            <div className = {classes.root}>
        
                <MuiThemeProvider theme = {this.state.light ? lTheme : dTheme}>

                    <AppDrawer
                        handleLightChange={this.handleLightChange} 
                        light={this.state.light} 
                        handleHelperChange={this.handleHelperChange} 
                        helper={this.state.helper} 
                        modes={this.state.modes}
                    />                    

                    <div style={{marginTop: '90px'}}></div>

                        <Grid 
                            container direction="row" 
                            justify="space-evenly" 
                            alignItems="center" 
                            spacing={24}>

                            <Grid item>
                                <SimView
                                light={this.state.light}
                                data={this.state.data}
                                />
                            </Grid>

                            <Grid item >
                                <CodeView light={this.state.light}/>
                            </Grid>
                            
                            <Grid item >
                                <ControlPanel
                                data={this.state.data}
                                handleRandomData={this.handleRandomData}/>
                            </Grid>
                            
                            <Grid item>
                                <InfoCard/>
                            </Grid>
                        
                        </Grid>       
                </MuiThemeProvider>
            </div>                
        )
    }
}

export default withStyles(styles)(App);