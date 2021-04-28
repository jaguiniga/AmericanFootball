import {Component} from "react";

import Logo from './images/s.png';
import Footer from './FooterComponent';
import Login from './LoginComponent';

class FirstPage extends Component {
    render() {
        return (
            <div style={{width: "880px", margin: "0px auto 20px auto"}}> 
        
                <h1 >Welcome To American Football</h1>
                
                <img src = {Logo}  alt =""/>
                <Footer/>

               
                 
                 <Login/>
                     
                </div>
        
           
                 
               
            
        );
    }
}



export default FirstPage;


