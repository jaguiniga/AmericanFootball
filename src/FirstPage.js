import {Component} from "react";

import Logo from './assets/s.png';
import Footer from './FooterComponent';
import Login from './LoginComponent';
class FirstPage extends Component {
    render() {
        return (
            <div> 
             
                <h1 >Welcome To American Football</h1>
                
                <img src = {Logo}  alt =""/>
                <Footer>

                 </Footer>
                 
                 <Login>
                     
                 </Login>
               </div>
           
                 
               
            
        );
    }
}



export default FirstPage;


