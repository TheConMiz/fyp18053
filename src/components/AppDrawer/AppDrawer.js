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

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Collapse from '@material-ui/core/Collapse';

import {Link, withRouter} from 'react-router-dom';

import { GoMarkGithub } from 'react-icons/go'


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

    nestedItem: {
      paddingLeft: theme.spacing.unit,
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
      about: false,
    }
  }

  handleMenuOpen = () =>{
    this.setState(state => ({drawer: !this.state.drawer}))
  }

  handleAboutOpen = () => {
    this.setState(state => ({about: !this.state.about}))
  }

  render(){
    const {classes, modes} = this.props
    
    // Pre-defined App Drawer
    const appDrawer = (
      <div>

        <div className={classes.appDrawer}>
          
          <MenuList subheader={<ListSubheader component="div" >Learn+</ListSubheader>}>
            
            <Divider/>

            {/*Code block for mapping mode props to Menu Item names*/}
            
            {modes.map((text, index) => (

              <MenuItem
                className={classes.menuItem}
                button key = {text}
                onClick={() => {
                  this.handleMenuOpen()
                }} 
                component={Link} 
                to={text.replace(/\s/g,'_').toLowerCase()}>

                  <ListItemText primary={text}/>
              
              </MenuItem>
            ))}

          </MenuList>
          
          <Divider/>
          
          <MenuList>
            <MenuItem
                className={classes.menuItem}
                button
                onClick={() => {this.handleAboutOpen()}}>
                
                  <ListItemText primary="About"/>
                  
                  {this.state.about ? <ExpandLess /> : <ExpandMore />}
              
              </MenuItem>

            {/*TODO:ABOUT US STUFF*/}
            <Collapse in={this.state.about} timeout="auto" unmountOnExit>
              <MenuList>
                <MenuItem
                  className={classes.nestedItem}
                  component="a" target="_blank" href="https://github.com/TheConMiz/fyp18053">
                    <GoMarkGithub/>
                    <ListItemText primary="View Repository" inset></ListItemText>
                </MenuItem>
              </MenuList>
          </Collapse>
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
              Learn+
            </Typography>

            <LightSwitch light={this.props.light} handleLightChange={this.props.handleLightChange}/>
            
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