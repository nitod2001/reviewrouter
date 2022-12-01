import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Panner from "./component/Panner";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Page1" element={<Page1 name="messi"></Page1>}></Route>
        <Route path="/Page2" element={<Page2 name="ronaldo"></Page2>}></Route>
      </Routes>
      {/* <Page2></Page2> */}
    </div>
  );
}

export default App;
