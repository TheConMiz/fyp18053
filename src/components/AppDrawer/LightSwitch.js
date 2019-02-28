import React from 'react'
import LightOn from '@material-ui/icons/WbSunny'
import LightOff from '@material-ui/icons/WbSunnyOutlined'
import IconButton from '@material-ui/core/IconButton/IconButton';
class LightSwitch extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {(!this.state.light)? <LightOff/>: <LightOn/>}
            </div>
          )
      }
}

export default LightSwitch