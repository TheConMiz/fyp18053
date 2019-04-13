import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        error: null,
        info: null
      }
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
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