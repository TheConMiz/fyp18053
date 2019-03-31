import React from 'react';

import AppDrawer from './components/AppDrawer/AppDrawer';
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import lightTheme from './baseThemes/lightTheme';
import darkTheme from './baseThemes/darkTheme';
import CodeView from './components/CodeView/CodeView';
import InfoCard from './components/temp/InfoCard/InfoCard';

import Grid from '@material-ui/core/Grid/Grid';
import {Route, Link, Switch} from 'react-router-dom';

import ControlPanel from './components/CodeControls/ControlPanel';

import SimView from './components/SimView/SimView';

const lTheme = createMuiTheme(lightTheme)
const dTheme = createMuiTheme(darkTheme)

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
})

class App extends React.Component {
    // Constructor for the Base App
    constructor(props){
        super(props)
        this.state = {
            // Prop for handling changes from Light theme to Dark theme, and vice versa
            light: true,
            // Prop for handling activation and deactivation of Helper mode
            helper: false,
        }
        // Bind the theme change handler to the App Component
        this.handleLightChange = this.handleLightChange.bind(this)
    }

    // Handles change of theme from Light Mode to Dark Mode
    handleLightChange = () =>{
        this.setState(state => ({light: !this.state.light}));
        console.log(this.state.light);
    }

    handleHelperChange = () =>{
        this.setState(state => ({helper: !this.state.helper}));
        console.log(this.state.helper);
    }


    // Save Light/Dark theme choice in local storage
    // Save Helper Mode choice in local storage
    componentWillMount(){
        localStorage.getItem('light') && this.setState({
            light: JSON.parse(localStorage.getItem('light')),
            helper: JSON.parse(localStorage.getItem('helper'))
        })
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('light', JSON.stringify(nextState.light))
        localStorage.setItem('helper', JSON.stringify(nextState.helper))
    }
    

    render() {
        const {classes} = this.props;

        return (
            <div className = {classes.root}>
                <MuiThemeProvider theme = {this.state.light ? lTheme : dTheme}>
                    <AppDrawer handleLightChange={this.handleLightChange} light={this.state.light} handleHelperChange={this.handleHelperChange} helper={this.state.helper}/>
                    <div style={{marginTop: '90px'}}></div>
                        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={24}>
                            <Grid item >
                                <SimView light={this.state.light}/>
                            </Grid>

                            <Grid item >
                                <CodeView light={this.state.light}/>
                            </Grid>

                            <Grid item >
                                <ControlPanel></ControlPanel>
                            </Grid>

                            <Grid item>
                                <InfoCard/>
                            </Grid>

                        </Grid>
                </MuiThemeProvider>
            </div>
        )
        
    //    return(
    //        <div>
    //             <Link to="/turing">Turing</Link>
    //             <Route path="/turing" component={SimView}/>
    //        </div>

    //    )
    }

    
}

export default withStyles(styles)(App);