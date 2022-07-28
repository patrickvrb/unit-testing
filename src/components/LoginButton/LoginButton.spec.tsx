import { cleanup, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { AppProvider } from '../../contexts/AppContext';
import * as Auth from './../../services/Auth';
import LoginButton from './LoginButton';

const loginSpy = jest.spyOn(Auth, 'LogIn')
loginSpy.mockResolvedValue(true);

describe('Login Button Component', () => {
    afterEach(cleanup);

    it('should start with "Login" text', () => {
        render(<LoginButton />)
        const loginButton = screen.getByText('Login');
        expect(loginButton).toBeInTheDocument();
    })

    it('should call LogIn API on click', async () => {
        render(
            <AppProvider>
                <LoginButton />
            </AppProvider>
        )

        screen.getByText('Login').click();

        await waitFor(() => {
            expect(loginSpy).toHaveBeenCalled();
        })

    })

    it('should change text based on login status', async () => {
        render(
            <AppProvider>
                <LoginButton />
            </AppProvider>
        )
        const loginButton = screen.getByText('Login');

        act(() => loginButton.click())

        const logoutButton = await screen.findByText('Logout')

        expect(logoutButton).toBeInTheDocument();
    })

    it('should match snapshot', () => {
        const { container } = render(<LoginButton />)

        expect(container).toMatchSnapshot();
    })

})
