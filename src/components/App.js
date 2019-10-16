import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap';
import Home from './page/home/Home';
import Service from './page/service/Service';
import Press from './page/press/Press';
import Work from './page/work/Work';
import Blog from './page/blog/Blog';
import Career from './page/career/Career';
import CareerForm from './page/career/CareerForm';
import About from './page/about/About';
// import Intro from '../components/intro/Intro';
// import simpleParallax from 'simple-parallax-js';
// import Scrollbar from 'smooth-scrollbar';
import '../assets/scss/main.scss';
class App extends Component {
  componentDidMount() {
    // var image = document.getElementsByClassName('thumbnail');
    // new simpleParallax(image, {
    //   scale: 1.5
    // });

    // Scrollbar.init(document.querySelector('#my-scrollbar'));

  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" render={()=> <Home />} exact/>
            <Route path="/service" render={()=> <Service />} />
            <Route path="/work" render={()=> <Work />} />
            <Route path="/press" render={()=> <Press />} />
            <Route path="/blog" render={()=> <Blog />} />
            <Route path="/career" render={()=> <Career />} />
            <Route path="/about" render={()=> <About />} />
            <Route path="/career-form" render={()=> <CareerForm />} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
