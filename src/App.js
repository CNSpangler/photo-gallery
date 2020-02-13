import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './images.js';
import { render } from '@testing-library/react';

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
    
    // const hornsFilter = images.filter(image => {
    //   if(!this.state.selected) return true;
    //   const state = parseInt(this.state.selected)
    //   return image.horns === state;
    // });
    
    return (
      <div>
        <Header />
        {JSON.stringify(this.state.data)}
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
        <ImageList imageData = {keywordFilter} />
      </div>
    );
  }
}