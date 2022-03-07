import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import LeaseForm from '../../pages/LeaseForm';
import store from '../../redux/configureStore';

describe('LeaseForm', () => {
  test('lease form is rendered in the DOM', () => {
    render(
      <Provider store={store}>
        <Router>
          <LeaseForm />
        </Router>
      </Provider>,
    );
    const leaseForm = screen.getByTestId('leaseForm');
    expect(leaseForm).toBeInTheDocument();
  });
});
