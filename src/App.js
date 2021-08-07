import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/tailwind.css";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App bg-light flex flex-col min-h-screen">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Footer></Footer>
      </Router>
    </main>
  );
}

export default App;
