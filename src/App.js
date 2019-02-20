import React, { Component } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Realtors from './components/realtors/Realtors';
import Features from './components/features/Features';
import StoryPictures from './components/story/StoryPictures';
import StoryContent from './components/story/StoryContent';
import Homes from './components/homes/Homes';
import GalleryList from './components/gallery/GalleryList';
import Footer from './components/footer/Footer';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar/>
        <Header/>
        <Realtors/>
        <Features/>
        <StoryPictures/>
        <StoryContent/>
        <Homes/>
        <GalleryList/>
        <Footer/>

      </React.Fragment>
      
       
       
       
     
    );
  }
}

export default App;
