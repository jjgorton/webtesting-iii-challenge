// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display.js';

describe('<Display />', () => {
	it('renders without crashing', () => {
		render(<Display />);
	});
});
