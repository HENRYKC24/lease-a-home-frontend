import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SignupPage from '../../pages/SignupPage';
import store from '../../redux/configureStore';

it('Navbar renders the UI as expected', () => {
  const tree = renderer.create(
    <Provider store={store}>

      <Router>
        <SignupPage />
      </Router>
      ,
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
