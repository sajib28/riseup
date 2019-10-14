import React, { Component } from 'react';
import Intro from '../components/intro/Intro';
import simpleParallax from 'simple-parallax-js';
// import Scrollbar from 'smooth-scrollbar';
import '../assests/scss/main.scss';
class App extends Component {
  componentDidMount() {
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
      scale: 1.5
    });

    // Scrollbar.init(document.querySelector('#my-scrollbar'));

  }
  render() {
    return (
      <div className="App scrollbar-light-blue">
        <Intro />
        {/* <img className="thumbnail" src={poster} alt="Image" /> */}
      </div>
    )
  }
}
export default App;
