
import "../index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Recipes from "./Recipes";
import Menu from "./Menu";



function App() {
  return (
  <Router>
    <div className="App">
    <Navbar />
    <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    <Footer />
    </div>
  </Router>
    
  );
}

export default App;
