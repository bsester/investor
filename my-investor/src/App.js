import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import {HashRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./Home";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";

function App() {
  return (
      <div className="App">
        <HashRouter>
          <Header/>
          <Routes>
            <Route path = '/' exact element={<Home/>}/>
            <Route path = '/signin' element={<SignIn/>}/>
            <Route path = '/create-account' element={<CreateAccount/>}/>
            {/*<Route path = '/education' element = {<Education/>}/>*/}
          </Routes>
        </HashRouter>
      </div>
  );
}

export default App;
