import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App page component', () => {

  it('should have a button for Sign In', () => {
    render(<App />);
    const loginButton = screen.getByText('Login');

    expect(loginButton).toBeInTheDocument();
  });

  it('should change button text after Sign In', async () => {
    render(<App />);
    const loginButton = screen.getByText('Login');

    loginButton.click();

    const logoutButton = await screen.findByText('Logout');

    expect(logoutButton).toBeInTheDocument();

  });

  it('should show text after Sign In', async () => {
    render(<App />);
    const loginButton = screen.getByText('Login');

    loginButton.click();

    const text = await screen.findByText('Você está logado!');

    expect(text).toBeInTheDocument();
  })

})
