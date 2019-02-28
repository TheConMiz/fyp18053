import React from 'react'
import './App.css';
import AppDrawer from './components/AppDrawer/AppDrawer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import amber from '@material-ui/core/colors/amber'

const theme = createMuiTheme({
    
        palette: {
            primary: amber,
            type: 'light',
            secondary: {
                main: '#5c6bc0',
            },
        },
    }
)

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            light: true,
        }
    }
    
    render() {
        return ( 
            <div className = "App">
                <MuiThemeProvider theme = {theme}>
                    <AppDrawer/>
                </MuiThemeProvider>
                
           </div>
        )
    }
}

export default App;