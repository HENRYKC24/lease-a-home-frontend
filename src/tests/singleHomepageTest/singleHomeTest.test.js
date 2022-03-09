import React from 'react';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import store from '../../redux/configureStore';
import Detail from '../../components/singleHome/singleHome';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
}));

describe('App component', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Detail />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
