// change code editor to dark when on
import React from 'react';
import Switch from '@material-ui/core/Switch';

class DarkSwitch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            darkMode: false
        }
    }

    render(){
        return(
            <label>
                <Switch/>
            </label>
        );
    }

    changeHandler(){
        this.setState({darkMode: !this.state.darkMode});
    }
}

export default DarkSwitch