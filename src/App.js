import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carpentry from './components/pages/Carpentry';
import Assembly from './components/pages/Assembly';
import Repair from './components/pages/Repair';
import Remodeling from './components/pages/Remodeling';
import Maintenance from './components/pages/Maintenance';
import Installation from './components/pages/Installation';
import Painting from './components/pages/Painting';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/painting" component={Painting} />
          <Route path="/carpentry" component={Carpentry} />
          <Route path="/assembly" component={Assembly} />
          <Route path="/repair" component={Repair} />
          <Route path="/remodeling" component={Remodeling} />
          <Route path="/maintenance" component={Maintenance} />
          <Route path="/installation" component={Installation} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
