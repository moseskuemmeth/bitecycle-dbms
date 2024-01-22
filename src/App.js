import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/faq'>
              <Faq />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
