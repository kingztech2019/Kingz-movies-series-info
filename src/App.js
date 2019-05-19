import React, { Component } from 'react';
import { Provider } from 'react-redux';
 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/home/Landing'
import Movie from './components/home/Movie';

import { HashRouter as Router, Route } from 'react-router-dom';
import './index.css';
import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
        <Router>
          <div>
            <Navbar/>
           <Route exact path="/" component={Landing} />
           <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
