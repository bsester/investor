import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import {HashRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <HashRouter>
          <Header/>
          <Routes>
            {/*<Route path = '/' exact element={<Home/>}/>*/}
            {/*<Route path = '/aboutme' element={<AboutMe/>}/>*/}
            {/*<Route path = '/projects' element={<Projects/>}/>*/}
            {/*<Route path = '/education' element = {<Education/>}/>*/}
          </Routes>
        </HashRouter>
      </div>
  );
}

export default App;
