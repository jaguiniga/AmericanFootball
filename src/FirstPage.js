import {Component} from "react";
import "./css/Login.css";
import "./css/Headlines.css";
import Logo from "./images/s.png";
import Footer from "./FooterComponent";
import Login from "./components/LoginComponent";
import Headlines from "./HeadlinesComponent";
import NavBar from "./components/Navbar/NavBarComponent";

class FirstPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ width: "880px", margin: "0px auto 20px auto" }}>
          <div className="Body">
            <h1>Welcome To American Football</h1>

            <img src={Logo} alt="" />
            <Footer />

            <Login />
            <Headlines />
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
