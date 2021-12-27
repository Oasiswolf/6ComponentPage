import React, { Component } from 'react';

import AlignSection from './align';
import HideMe from './hideMe';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Welcome to my page of 6 Tricks!</h1>
        <hr />
        <AlignSection  />
        <hr />
        <HideMe />
        <hr />

      </div>
    );
  }
}
