import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Hackathon from "./containers/Hackathon/Hackathon";
import Conferences from "./containers/Conferences/Conferences";
import Scholarship from "./containers/Scholarship/Scholarship";
import Navbar from "./containers/Navbar/Navbar";
import Footer from "@bit/zubi-io.core.footer";
import ScrollToTop from "./utils/ScrollToTop";
import LoginModal from "./containers/LoginModal/LoginModal";
function App() {
  const [clicked, setClicked] = useState(false);

  const alter = () => {
    setClicked(false);
  };


  return (
    <Router>
      <ScrollToTop>
        <Navbar setClicked={setClicked}/>
        <Switch>
          <Route exact path="/">
            <Home setClicked={setClicked}/>
          </Route>
          <Route exact path="/hackathons">
            <Hackathon />
          </Route>
          <Route exact path="/conferences">
            <Conferences />
          </Route>
        </Switch>
        <Footer />
        {clicked && <LoginModal alter={alter} />}
      </ScrollToTop>
    </Router>
  );
}

export default App;
