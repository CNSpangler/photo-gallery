// Initially, ImageList component can just show count of images so you know it is receiving the data via props.

import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return(
            <ul>
                <li>There are {this.props.imageData} images</li>
                {/* <ImageItem /> */}
            </ul>
        )
    }
};