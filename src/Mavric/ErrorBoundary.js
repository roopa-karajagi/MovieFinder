import React, { Component } from 'react'
import './Movie.css'

 class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    
    componentDidCatch(err,info){
        console.log(err);
        console.log(info);
        // Display fallback UI
    this.setState({ hasError: true });
    }
    render() {
        if(this.state.hasError ){
            return <h1 style={{color:"#FF0000",fontSize:25,marginTop:"20px"}}>Something Went Wrong</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary;