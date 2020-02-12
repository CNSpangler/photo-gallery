// App.js - top level component. App.js imports the horned creatures data and passes it to ImageList.js
// The App component should introduce the image list data, passing as a prop to ImageList.

import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './images.js';

function App() {
  return (
    <div>
      <Header />
      <ImageList imageData = {images} />
    </div>
  );
}

export default App;
