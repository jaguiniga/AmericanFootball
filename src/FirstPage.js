import {Component} from "react";

import Logo from './assets/s.png';
import Footer from './FooterComponent';
import Login from './LoginComponent';

class FirstPage extends Component {
    render() {
        return (
            <div className="App2"> 
             
                <h1 >Welcome To American Football</h1>
                
                <img src = {Logo}  alt =""/>
                <Footer/>

               
                 
                 <Login/>
                     
                
               </div>
           
                 
               
            
        );
    }
}



export default FirstPage;


