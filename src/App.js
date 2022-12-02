import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Panner from "./component/Panner";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";

function App() {
  const location = useLocation();
  const changePath = () => {
    if (location.pathname === "/") {
      location.pathname = "/football";
    } else location.pathname = "/football";
    return location.pathname;
  };
  console.log(location);
  return (
    <div className="App">
      <Routes>
        <Route path={changePath()} element={<Home></Home>}></Route>
        <Route
          path="/football/Page1"
          element={<Page1 name="messi"></Page1>}
        ></Route>
        <Route
          path="/football/Page2"
          element={<Page2 name="ronaldo"></Page2>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
