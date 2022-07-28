import { render, screen } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../contexts/AppContext';
import * as Auth from './../../services/Auth';
import Landing from './Landing';

describe('Landing page', () => {

    it('should display correct title', () => {
        render(<Landing />)
        const initialText = screen.getByText('Café com Bytes');
        expect(initialText).toBeInTheDocument();
    })

    it('should match snapshot', () => {
        const { container } = render(<Landing />)
        expect(container).toMatchSnapshot();
    })

})
