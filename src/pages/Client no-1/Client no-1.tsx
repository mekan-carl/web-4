import "./Client.css";
import icon from "../../assets/w3icon.png";
import secondIcon from "../../assets/icon.png";
import certificate from "../../assets/certificates/mekan-certificate-w3.jpg";

const Client = () => {
  return (
    <>
      <div className="Container ">
        <div className="Containertwo ">
          <div className="left-block">
            <img className="icon" src={icon} />
            <p className="Profession text-center">Front End Developer</p>
            <div className="completed">
              <img src={secondIcon} className="secondIcon" />
              <p className="date">
                Completed: <span className="fw-bolder"> July 21, 2023</span>
              </p>
            </div>
            <img src={certificate} className="diploma-mobile" />
            <a href={certificate} download>
              <button className="Download-btn" type="button">
                Download Certicate
              </button>
            </a>
            <a
              href="https://campus.w3schools.com/products/front-end-certificate"
              className="learn-more"
            >
              Learn more about this exam
            </a>
          </div>
          <div className="right-block">
            <img src={certificate} className="diploma-laptop" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
