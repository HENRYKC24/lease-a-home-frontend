import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import store from '../../redux/configureStore';

describe('Navbar unit tests', () => {
  test('desktop navbar is rendered in the DOM', () => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );
    const desktopNav = screen.getByTestId('desktop-navbar');
    expect(desktopNav).toBeInTheDocument();
  });

  test('mobile navbar is rendered in the DOM', () => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );
    const desktopNav = screen.getByTestId('mobile-navbar');
    expect(desktopNav).toBeInTheDocument();
  });
});
