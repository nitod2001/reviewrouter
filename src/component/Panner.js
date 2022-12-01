import { Link } from "react-router-dom";
import "../css/Panner.css";
const Panner = (props) => {
  return (
    <div
      className={
        props.main === "messi"
          ? "panner-section scale"
          : "panner-section active scale"
      }
    >
      <div className="panner-image-wrap">
        <div className="panner-image">
          <img src={props.src}></img>
        </div>
      </div>
      <div className="panner-content ">
        <h1>{props.name}</h1>
        <p>{props.content}</p>
        <div className="panner-btn-wrap">
          <Link to="/football" className="panner-btn">
            {" "}
            Back{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Panner;
