import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return(
            <li>
                <h3>{this.props.imageTitle}</h3>
                <img src={this.props.imageSource} alt={this.props.imageDescription} />
                <h4>This creature has {this.props.imageHorns} horn(s)! 
                {this.props.imageDescription}</h4>
            </li>
        )
    }
};