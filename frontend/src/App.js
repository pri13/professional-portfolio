import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/Pages/Home';
import Projects from '../src/Pages/Projects';
import Resume from '../src/Pages/Resume';
import Contact from '../src/Pages/Contact';
import About from '../src/Pages/About'
import resumeData from './data/resumeData.json'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume"  
           render={(props) => <Resume {...props} data={resumeData.personalInfo} />}  />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
