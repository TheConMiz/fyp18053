import React from 'react'
// Material UI Components
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar/AppBar'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton/IconButton';
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings'
import LightOn from '@material-ui/icons/WbSunny'
import LightOff from '@material-ui/icons/WbSunnyOutlined'
import CssBaseline from '@material-ui/core/CssBaseline'
import ListSubheader from '@material-ui/core/ListSubheader'
import Hidden from '@material-ui/core/Hidden/Hidden'
import ToolTip from '@material-ui/core/Tooltip/Tooltip'

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
      flexGrow: 1
    },
  
    settingsIcon: {
      marginRight: -12
    },
  
    lights: {
      margin: theme.spacing.unit,
    },
  
    appDrawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    }
  })

class AppDrawer extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
      drawer: false,
    }
  }

  handleMenuOpen = () =>{
    this.setState(state => ({drawer: !this.state.drawer}))
  }

  //TODO: ROUTING PURPOSES
  handleListClicks = (pageId) =>{
    console.log(pageId)
  }

  render(){
    const {classes, theme} = this.props
    const appDrawer = (
      <div>
        <div className={classes.appDrawer}>
          <List subheader={<ListSubheader component="div">FYP18053</ListSubheader>}>
            <Divider/>
            {['Turing', 'von Neumann', 'Sorting Algorithms'].map((text, index) => (
              <ListItem  button key = {text} onClick={this.handleMenuOpen}>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            {['About Us'].map((text, index) => (
              <ListItem button key = {text} onClick={this.handleMenuOpen}>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    )

    return(
      <div className = {classes.root}>
        <CssBaseline/>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <ToolTip title="Open Menu" interactive placement = 'bottom-end'>
              <div>
                <IconButton color="secondary" className={classes.menuButton} aria-label="Open Menu" onClick={this.handleMenuOpen}>
                  <MenuIcon/>
              </IconButton>
            </div>
            </ToolTip>
  
            <Typography variant="h6" color="secondary" noWrap className={classes.typography}>
              FYP18053
            </Typography>

            <ToolTip title="Toggle Lights" interactive >
              <IconButton color="secondary" className={classes.lights} onClick={this.props.handleLightChange} aria-label="Toggle Lights">
                {(!this.props.light)? <LightOn/>: <LightOff/>}
              </IconButton>
            </ToolTip>

            <ToolTip title="Settings" interactive placement = 'bottom-start'>
              <IconButton color="secondary" className={classes.settingsIcon} aria-label="My Settings">
                <SettingsIcon/>
              </IconButton>
            </ToolTip>
            
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

export default withStyles(styles, {withTheme: true})(AppDrawer);