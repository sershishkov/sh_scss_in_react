import React, { Component } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Realtors from './components/realtors/Realtors';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar/>
        <Header/>
        <Realtors/>

      </React.Fragment>
      
       
       
       
     
    );
  }
}

export default App;
