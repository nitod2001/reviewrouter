import "../css/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-section">
      <Link to="Page1" className="home-left">
        <img src="https://media.phapluatvacuocsong.vn/images/2022/11/23/21-1669162937-saostar-pq2d9dwh1sqhz77c.jpg"></img>
      </Link>
      <Link to="Page2" className="home-right">
        <img src="https://i.dailymail.co.uk/i/newpix/2018/06/15/20/4D48591300000578-0-image-a-71_1529092303705.jpg"></img>
      </Link>
    </div>
  );
};

export default Home;
