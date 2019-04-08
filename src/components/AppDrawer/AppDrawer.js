import React from 'react'
//Material UI Components
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar/AppBar'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton/IconButton';
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ListSubheader from '@material-ui/core/ListSubheader'
import Hidden from '@material-ui/core/Hidden/Hidden'
import ToolTip from '@material-ui/core/Tooltip/Tooltip'

import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

import {compose} from 'recompose';

import LightSwitch from './assets/LightSwitch'
import HelperButton from './assets/HelperButton'

import {Link, withRouter} from 'react-router-dom';

const drawerWidth = 240

const styles = theme => ({
    root: {
      display: 'flex',
    },
  
    menuButton: {
      marginRight: 20,
      marginLeft: -12,
    },
  
    appBar: {
      marginLeft: drawerWidth,
    },
  
    typography: {
      marginRight: 20,
      flexGrow: 1,
      align: "center",
    },
  
    settingsIcon: {
      marginRight: -12
    },

    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
          color: theme.palette.common.white,
        },
      },
    },
  
    appDrawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      }
    },
  })

class AppDrawer extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
      drawer: false,
      modes: this.props.modes,
      helper: false,
    }
  }

  handleMenuOpen = () =>{
    this.setState(state => ({drawer: !this.state.drawer}))
  }

  render(){
    const {classes, modes, pathname} = this.props
    
    // Pre-defined App Drawer
    const appDrawer = (
      <div>

        <div className={classes.appDrawer}>
          
          <MenuList subheader={<ListSubheader component="div">FYP18053</ListSubheader>}>
            
            <Divider/>

            {/*Code block for mapping mode props to Menu Item names*/}
            
            {modes.map((text, index) => (

              <MenuItem
                className={classes.menuItem}
                button key = {text} 
                onClick={() => {
                  this.props.handleCurrentMode(text)
                  this.handleMenuOpen()
                }} 
                component={Link} 
                selected={this.props.currentMode === text ? true : false}
                to={text.replace(/\s/g,'_').toLowerCase()}>

                  <ListItemText primary={text}/>
              
              </MenuItem>
            ))}

          </MenuList>
          
          <Divider/>
          
          <MenuList>
            {['About Us'].map((text, index) => (
              <MenuItem
                className={classes.menuItem}
                button key = {text}
                onClick={() => {
                  this.props.handleCurrentMode(text)
                  this.handleMenuOpen()
                }} 
                component={Link} 
                to={text.replace(/\s/g,'_').toLowerCase()} 
                selected={this.props.currentMode === text ? true : false}>
                
                <ListItemText primary={text}/>
              
              </MenuItem>
            ))}
          </MenuList>
        </div>
      </div>
    )

    return(
      <div className = {classes.root}>
        <CssBaseline/>
        <AppBar className={classes.appBar}>

          <Toolbar>
            <ToolTip title="Open Menu" placement = 'bottom'>
              <div>
                <IconButton color="secondary" className={classes.menuButton} onClick={this.handleMenuOpen}>
                  <MenuIcon/>
                </IconButton>
              </div>
            </ToolTip>

            <Typography variant="h6" color="secondary" noWrap className={classes.typography}>
              {this.props.currentMode.toUpperCase()}
            </Typography>

            <LightSwitch light={this.props.light} handleLightChange={this.props.handleLightChange}/>
  
            <HelperButton helper={this.props.helper} handleHelperChange={this.props.handleHelperChange}/>
            
          </Toolbar>
        </AppBar>
        
        <nav className={classes.appDrawer}>
          <Hidden smUp implementation="css">
            <SwipeableDrawer container={this.props.container} anchor="left" open={this.state.drawer} onOpen={this.handleMenuOpen} onClose={this.handleMenuOpen}>
              {appDrawer}
            </SwipeableDrawer>
          </Hidden>
        </nav>

      </div>
    )
  }
}

export default compose(
  withStyles(styles, {withTheme: true}),
  withRouter
) (AppDrawer);