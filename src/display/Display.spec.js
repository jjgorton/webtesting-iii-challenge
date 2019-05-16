// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display.js';

describe('<Display />', () => {
	it('renders without crashing', () => {
		render(<Display />);
	});

	describe('Closed', () => {
		it('displays "Closed" if closed prop true', () => {
			const { getByText } = render(<Display closed={true} />);

			getByText(/closed/i);
		});

		it('displays "Open" if otherwise', () => {
			const { getByText } = render(<Display closed={false} />);

			getByText(/open/i);
		});

		it('uses red class when closed', () => {
			const { getByText } = render(<Display closed={true} />);
			const led = getByText(/Closed/i);

			expect(led).toHaveClass('red-led');
		});

		//tohaveclass
	});

	describe('Locked', () => {
		it('displays "Locked" if locked prop true', () => {
			const { getByText } = render(<Display locked={true} />);

			getByText(/locked/i);
		});

		it('displays "Unlocked" if otherwise', () => {
			const { getByText } = render(<Display locked={false} />);

			getByText(/unlocked/i);
		});
	});
});
