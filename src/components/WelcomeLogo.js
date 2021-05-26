import stadium from "../images/stadium.jpg";
import "../css/WelcomeLogo.css";

function WelcomeLogo() {
  return (
    <div
      className="autoFit"
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}>
      {/* <h1>Welcome To American Football</h1> */}
      <div>
        <img src={stadium} className="image-autoFit" alt="Football Player" />
     Football
      </div>
    </div>
  );
}

export default WelcomeLogo;
