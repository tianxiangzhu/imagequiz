import React from 'react';
import {Redirect} from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            signedIn: false
        };
    }

    onSubmit=(event)=>{
        if(this.state.username.trim().length>0){
            this.setState({signedIn:true});
        }
        event.preventDefault();
    }

    handleChange =(event)=>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    render(){
        let from = {pathname: '/', 
        state:{user: this.state.username}}
        
        if (this.state.signedIn){
            return(
                <Redirect to={from} />
            );

        }

        return(
            <div>
                    <form onSubmit={this.onSubmit}>
                        <label>Username:</label>
                        <input 
                        type="text" 
                        name = "username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        ></input>
                        <button type="submit">Login</button>
                    </form>
            </div>
        );
    }

}

export default Login;