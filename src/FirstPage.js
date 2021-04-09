import {Component} from "react";
import './Images.css';
import Logo from './assets/s.png';
import Footer from './FooterComponent';

class FirstPage extends Component {
    render() {
        return (
            <div className='background'>
                <h1 >Welcome To American Football</h1>
                
                <img src = {Logo}  alt =""/>
                 <Footer>

                 </Footer>
            </div>
        );
    }
}

export default FirstPage;