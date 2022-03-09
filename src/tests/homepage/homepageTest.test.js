import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';
import Home from '../../pages/homepage';

describe('Homepage unit test', () => {
  test('homepage is rendered in the DOM', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(screen.queryByTestId('homepage')).toBeDefined();
  });
});
