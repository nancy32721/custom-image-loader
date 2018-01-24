import React, { Component } from 'react';
import ImageLoader from './../src/ImageLoader';
import './../src/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ImageLoader src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/08/1808x1808.jpg" />
      </div>
  );
  }
}

export default App;
