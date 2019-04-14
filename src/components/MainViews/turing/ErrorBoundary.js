import React from 'react';

// Boilerplate code for handling errors from the Turing Machine
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        error: null,
        info: null
      }
    }
  
    componentDidCatch(error, info) {
      this.setState({ error: error, info: info });
    }
  
    render() {
      if (this.state.info) {
        return(<div>Error. Refresh the Page!</div>)
      }
      
      return this.props.children;
    }
  }

export default ErrorBoundary