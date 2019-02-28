import React from 'react'
import './App.css';
import AppDrawer from './components/AppDrawer/AppDrawer'
import SimulationView from './components/SimulationView'

class App extends React.Component {

    render() {
        return ( 
            <div className = "App">
                <AppDrawer/>
                <SimulationView/>

            </div>
        )
    }
}

export default App;