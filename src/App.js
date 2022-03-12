import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./presentation/pages/about";
import Home from "./presentation/pages";
import Blog from "./presentation/pages/blog";
import Footer from "./presentation/layout/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div
          style={{
            position: "relative",
          }}
        >
          <ul
            style={{
              position: "absolute",
              width: "100%",
              height: "6%",
              top: 0,
              left: 0,
              opacity: 0.2,
              background: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
          </ul>
          <div style={{ zIndex: 100 }}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/blogs">
                <Blog />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
