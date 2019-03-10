const drawerWidth = 240

const Theme = theme => ({
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

  export default Theme