import React from 'react'

// Component for the stylised title on the landing page
import Typist from 'react-typist'
import './mainPage/MainPage.scss'

// Component for routing
import {Link} from 'react-router-dom'

// Material UI Components
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        align: 'center'
    },
})

// Code based on boilerplate provided by the author of "react-typist"
class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            typingDone: false
        }
    }

    typingDone = () => {
        this.setState({typingDone: !this.state.typingDone})
        console.log(" DONE")
    }

    render() {
    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={40}>
            <Grid item><div style={{marginTop: '240px'}}></div></Grid>
            <Grid item>
                <Typist
                    className="Typist-header"
                    avgTypingSpeed={40}
                    startDelay={1000}
                    onTypingDone={this.typingDone}>

                    <span>Learnt</span>

                    <Typist.Backspace count={1} delay={700}/>
                
                    <Typist.Delay ms={250}/>
                    <span>+</span>
                </Typist>
            </Grid>

            <Grid item>
                    <Button color="primary" variant="contained" component={Link} to="/turing_machine">
                        <Typography color="secondary">Click to Begin</Typography>
                    </Button>
            </Grid>
        </Grid>
    );
  }
}


export default withStyles(styles)(MainPage)