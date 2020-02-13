import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './images.js';
import Select from './Select.js';

export default class App extends Component {
  state = { selected: null };

  render() {
    const handleChange = e => {
      this.setState({ selected: e.target.value });
  };

    const keywordFilter = images.filter(image => {
      if(!this.state.selected) return true;
      return image.keyword === this.state.selected;
    });
    
    const hornsFilter = images.filter(image => {
      if(!this.state.selected) return true;
      const state = parseInt(this.state.selected)
      return image.horns === state;
    });

    const babyFilter = images.filter(image => {
      if(!this.state.selected) return true;
      return image.title.startsWith('Baby' || 'baby');
    })
    
    return (
      <div>
        <Header />
        <Select handleChangeCallback={handleChange} />
        <ImageList imageData = {keywordFilter} />
        <ImageList imageData = {hornsFilter} />
        <ImageList imageData = {babyFilter} />
      </div>
    );
  }
}