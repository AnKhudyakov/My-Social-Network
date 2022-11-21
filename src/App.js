import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Navbar></Navbar>
        <Main
        //dispatch = {props.dispatch}
        //state = {props.state}
        ></Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
