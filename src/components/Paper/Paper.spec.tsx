import React from 'react';
import { render } from '@testing-library/react';
import Paper from './Paper';

describe('Paper Component', () => {
    test('matches snapshot', () => {
        const { asFragment } = render(<Paper />);
        expect(asFragment()).toMatchSnapshot();
    });
});
