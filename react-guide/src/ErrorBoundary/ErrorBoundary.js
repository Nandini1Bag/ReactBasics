import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state={
        haserror:false,
        errmsg:''
    }


    componentDidCatch=(error,info)=>{
        this.setState({hasError:true,errmsg:error});
    }

    render (){
        if (this.state.haserror) {
           return <h1>{this.state.errmsg}</h1>
        }else{
            return this.props.children;
        }

    }
}
export default ErrorBoundary;