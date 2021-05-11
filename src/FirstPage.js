import {Component} from "react";
import './css/Login.css';
import './Headlines.css';
import Logo from './images/s.png';
import Footer from './FooterComponent';
import Login from './components/LoginComponent';
import Headlines from  './HeadlinesComponent';


class FirstPage extends Component {
    render() {
        return (
            <div style={{width: "880px", margin: "0px auto 20px auto"}}> 

            <div className='Body'>
        
                <h1 >Welcome To American Football</h1>
                
                <img src = {Logo}  alt =""/>
               <Footer />
                

               
                 
                 <Login/>
                 <Headlines/>
                 </div>
                </div>
        
           
                 
               
            
        );
    }
}



export default FirstPage;


