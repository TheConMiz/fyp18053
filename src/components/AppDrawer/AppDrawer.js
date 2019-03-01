import React from 'react'
import PropTypes from 'prop-types'
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
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
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

  accountCircle: {
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
    //console.log(this.state.drawer)
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
            {['Turing', 'von Neumann'].map((text, index) => (
              <ListItem button key = {text} onClick={() => this.handleListClicks(text)}>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            {['About Us'].map((text, index) => (
              <ListItem button key = {text} onClick={() => this.handleListClicks(text)}>
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
            <IconButton color="inherit" className={classes.menuButton} aria-label="Open Menu" onClick={this.handleMenuOpen}>
              <MenuIcon/>
            </IconButton>
            </div>
            </ToolTip>
  
            <Typography variant="h6" color="inherit" noWrap className={classes.typography}>
              FYP18053
            </Typography>

            <ToolTip title="Toggle Lights" interactive >
              <IconButton color="inherit" className={classes.lights} onClick={this.props.handleLightChange} aria-label="Toggle Lights">
                {(!this.props.light)? <LightOn/>: <LightOff/>}
              </IconButton>
            </ToolTip>

            <ToolTip title="Account" interactive placement = 'bottom-start'>
              <IconButton color="inherit" className={classes.accountCircle} aria-label="My Account">
                <AccountCircle/>
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

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AppDrawer) 