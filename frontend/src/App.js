import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header';
import Home from '../src/Pages/Home';
import Projects from '../src/Pages/Projects';
import Resume from '../src/Pages/Resume';
import About from '../src/Pages/About'
import ProjectsPage from './components/Projects/FrontendProjectsTab';
import ProjectDetails from './components/Projects/ProjectDetails';
import { LoaderProvider } from './context/LoaderContext';



function App() {
  return (
    <div className="App">
      <LoaderProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/about" component={About} />

            <Route
              exact
              path="/projects"
              component={Projects}
            />

            <Route
              path="/projects/:slug"
              component={ProjectDetails}
            />
          </Switch>
        </Router>
      </LoaderProvider>
    </div>
  );
}

export default App;
