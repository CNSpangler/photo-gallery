import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './images.js';

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
    
    return (
      <div>
        <Header />
        <select className="unicornFilter" onChange={handleChange}>
          <option value='' defaultValue>All</option>
          <option value='narwhal'>Narwhal</option>
          <option value='rhino'>Rhino</option>
          <option value='unicorn'>Unicorn</option>
          <option value='unilego'>Unilego</option>
          <option value='triceratops'>Triceratops</option>
          <option value='markhor'>Markhor</option>
          <option value='mouflon'>Mouflon</option>
          <option value='addax'>Addax</option>
          <option value='chameleon'>Chameleon</option>
          <option value='lizard'>Lizard</option>
          <option value='dragon'>Dragon</option>
        </select>
        <select className="hornsFilter" onChange={handleChange}>
          <option value='' defaultValue>All Creatures</option>
          <option value='1'>One Horn</option>
          <option value='2'>Two Horns</option>
          <option value='3'>Three Horns</option>
          <option value='100'>ONE HUNDRED HORNS</option>
        </select>
        <ImageList imageData = {keywordFilter} />
        <ImageList imageData = {hornsFilter} />
      </div>
    );
  }
}