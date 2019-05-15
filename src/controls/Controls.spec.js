// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls.js';

describe('<Controls />', () => {
	it('renders without crashing', () => {
		render(<Controls />);
	});
});
