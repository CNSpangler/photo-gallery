import './html-equal.js';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src.App.js';
import Header from '../src.Header.js';
import ImageItem from '../src/ImageItem.js';
import ImageList from '../src/ImageList.js';

App('renders correctly', () => {
    const tree = renderer
        .create(<App />)
        .toJSON();
        expect(tree).toMatchSnapshot();
});

Header('renders correctly', () => {
    const tree = renderer
        .create(<Header />)
        .toJSON();
        expect(tree).toMatchSnapshot();
});

ImageList('renders correctly', () => {
    const tree = renderer
        .create(<ImageList />)
        .toJSON();
        expect(tree).toMatchSnapshot();
});

ImageItem('renders correctly', () => {
    const tree = renderer
        .create(<ImageItem />)
        .toJSON();
        expect(tree).toMatchSnapshot();
});