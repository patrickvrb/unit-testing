import { render, screen } from '@testing-library/react';
import React from 'react';
import LoginButton from './LoginButton';


describe('Login Button Component', () => {

    it('should start with "logged out" text', () => {
        const mock = jest.fn();
        render(<LoginButton setIsLoggedIn={mock} isLoggedIn={false} />);
        const loginButton = screen.getByText('Login');
        expect(loginButton).toBeInTheDocument();
    })

    it('should execute setIsLoggedInCallback', () => {
        const mock = jest.fn();
        render(<LoginButton setIsLoggedIn={mock} isLoggedIn={false} />);

        const loginButton = screen.getByText('Login');

        loginButton.click();

        expect(mock).toHaveBeenCalled();
    })

})
