import React, { Component } from 'react';
import '../App.css';
import logo from '../005.jpg';
import name from '../006.jpg';
import value from '../003.jpg';
import string  from '../004.jpg';

class App extends Component {
  render() {
    return (
      <div className="cardbox">
        <div className="row">
          <div className="col-sm-12 m-5">

              <div className="container">
                  <div className="row">
                    <div className="col">
                      <img src={logo} className="App-005" alt="005" />
                    </div>
                  </div>
              </div>
              
              <div className="container">
                  <div className="row">
                    <div className="col">
                      <img src={name} className="App-006" alt="006" />
                    </div>
                  </div>
              </div>

              <div className="container">
                  <div className="row">
                    <div className="col">
                      <img src={value} className="App-003" alt="003" />
                    </div>
                  </div>
              </div>

              <div className="container">
                  <div className="row">
                    <div className="col">
                        <img src={string} className="App-004" alt="004" />
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;