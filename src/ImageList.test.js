import React from 'react';
import renderer from 'react-test-renderer';
import ImageList from './ImageList.js';

it('renders correctly', () => {
    const tree = renderer
        .create(<ImageList />)
        .toJSON();
        expect(tree).toMatchSnapshot();
});