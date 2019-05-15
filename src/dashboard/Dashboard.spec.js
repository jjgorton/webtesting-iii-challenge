// Test away

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
	it('renders without crashing', () => {
		render(<Dashboard />);
	});

	it('matches snapshot', () => {
		const tree = renderer.create(<Dashboard />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});

// describe('gate', () => {
//     describe('default', () => {
//         it('defaults to unlocked and open', () => {

//         })
//     })
// })
