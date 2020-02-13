import React from 'react';
import renderer from 'react-test-renderer';
import ImageItem from './ImageItem.js';

it('renders correctly', () => {
    const tree = renderer
        .create(<ImageItem />)
        .toJSON();
        expect(tree).toMatchSnapshot();
});