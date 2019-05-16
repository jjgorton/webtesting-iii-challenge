// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls.js';
import Dashboard from '../dashboard/Dashboard';

describe('<Controls />', () => {
	it('renders without crashing', () => {
		render(<Controls />);
	});

	// describe('button text', () => {
	// 	it('button text changes to show state if clicked', () => {
	// 		const spy = jest.fn(() => true);

	// 		const toggle = Dashboard.toggleLocked(spy);
	// 		expect(toggle).toBe(true);
	// 	});
	// });
});
