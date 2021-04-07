import {Component} from "react";
import './Images.css';
import Logo from './s.png';
import Footer from './FooterComponent';
import Login from './LoginComponent';
class FirstPage extends Component {
    render() {
        return (
            <div className='background'>
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