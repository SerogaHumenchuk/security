import React, { Component } from 'react';
import ReactDOM from "react-dom";
import SideBar from "./Components/Sidebar/Sidebar";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';

class App extends Component {

  state = {
    imageGallery: ['https://placeimg.com/1000/900/any', 'https://placeimg.com/1000/900/animal', 'https://placeimg.com/1000/800/any', 'https://placeimg.com/1000/900/any']
  }

  render() {
    const {imageGallery} = this.state;
    return (
      <div>
        <Header/>
        <Gallery massImage={imageGallery}/>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Footer/>
      </div>
    );
  }
}

export default App;
