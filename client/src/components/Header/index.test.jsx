import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Header from './index';

describe('<Header />', () => {
  const username = 'Vova'
  const mockStore = configureStore()

  beforeEach(() => {
    jest.mock('react-redux', () => ({
      useSelector: jest.fn(),
      useDispatch: () => mockDispatch
    }));
  });
  
  it('renders username', () => {
    const { getByText } = render(
      <Provider store={mockStore({})}>
        <Header username={username} />
      </Provider>
    );

    expect(getByText(username)).not.toBeNull();
  });

  it('renders Logout button', () => {
    const { getByText } = render(
      <Provider store={mockStore({})}>
        <Header username={username} />
      </Provider>
    );

    expect(getByText('Logout')).not.toBeNull();
  });

});
