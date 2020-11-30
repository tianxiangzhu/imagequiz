import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import daffodil from '../image/daffodil.png';
import cherryblossom from '../image/cherryblossom.png';
import daisy from '../image/daisy.png';
import lily from '../image/lily.png';
import rose from '../image/rose.png';
import sunflower from '../image/sunflower.png';
import tulip from '../image/tulip.png';
import waterlily from '../image/waterlily.png';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
        };
    }


    body = () => {
        return (
            <div className="Content">
                Hello from homepage(finally)
            </div>
        );
    }

    image = () =>{
        return (
            <table>
                <tbody>
                <tr>
                    <td><figure><Link to='/quiz1'><img src={daffodil}></img></Link><figcaption>Daffodil</figcaption></figure></td>
                    <td><figure><Link to='/quiz2'><img src={daisy}></img></Link><figcaption>Daisy</figcaption></figure></td>
                    <td><figure><Link to='/quiz3'><img src={cherryblossom}></img></Link><figcaption>Cherryblossom</figcaption></figure></td>
                    <td><figure><Link to='/quiz4'><img src={lily}></img></Link><figcaption>lily</figcaption></figure></td>
                </tr>
                <tr>
                    <td><figure><Link to='/quiz5'><img src={rose}></img></Link><figcaption>Rose</figcaption></figure></td>
                    <td><figure><Link to='/quiz6'><img src={sunflower}></img></Link><figcaption>Sunflower</figcaption></figure></td>
                    <td><figure><Link to='/quiz7'><img src={tulip}></img></Link><figcaption>Tulip</figcaption></figure></td>
                    <td><figure><Link to='/quiz8'><img src={waterlily}></img></Link><figcaption>Waterlily</figcaption></figure></td>
                </tr>
                </tbody>
            </table>
        )
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
                <div>{this.image()}</div>
            </div>
        );
    }
}

export default Home;