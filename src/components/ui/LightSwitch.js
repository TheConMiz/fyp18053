import React from 'react';
import LightOn from '@material-ui/icons/WbIncandescent';
import LightOff from '@material-ui/icons/WbIncandescentOutlined';
import IconButton from '@material-ui/core/IconButton';

class LightSwitch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            light: true
        };
        this.handleLight = this.handleLight.bind(this)
    }

    handleLight(){
        this.setState({
            light: !this.state.light
        })
        console.log("Flicked!")
    }

    render(){
        return(
            <IconButton color="inherit">
                <LightOn/>
            </IconButton>
        );
    };
}

export default LightSwitch;