
import './App.css';
import Home from './Components/Home/Home';
import SideBar from './Components/Sidebar/SideBar';
import DashBoard from './Components/DashBoard/DashBoard';
import Navbar from './Components/NvBar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
    
    <div className="App">

  <Router>
  <SideBar>

   
</SideBar>
    
  
  
  <Switch>
          <Route path="/sidebar">
            <SideBar></SideBar>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
         
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
  </Router>
  
    </div>
  );
}

export default App;
