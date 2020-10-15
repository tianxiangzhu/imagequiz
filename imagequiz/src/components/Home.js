import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Entry from './Entry';
import server from '../ServerInterface/server';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            cursor:0,
            entries: []
        };
    }

    handleKeyDown =(e) =>{
        const {cursor,entries} = this.state;
        if(e.keyCode === 39 && (cursor < entries.length-1)) {// right arrow key
            this.setState({cursor: cursor +1});
        }else if (e.keyCode === 37 && (cursor >0)) { // left arrow key
            this.setState({cursor: cursor -1});
        }
    }

    body = () => {
        const {entries, cursor}= this.state;
        return (
            <div className="Content">
                {entries.length > 0 ?
                <div className="Entry">
                    <Entry entry={entries[cursor]}/>
                </div>   
            :
            ''}
            </div>
        );
    }

    componentDidMount(){
        const entries = server.fetchEntries();
        this.setState({entries: entries})
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    render(){
        let username='';
        const location = this.props.location;
        if (location){
            if(location.state){
                if (location.state.user){
                    username = location.state.user;
                }
            }
        }

        return (
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username
                    : <Link to='/login'>Login</Link>}
                </div>
                <div>{this.body()}</div>
            </div>
        );
    }
}

export default Home;