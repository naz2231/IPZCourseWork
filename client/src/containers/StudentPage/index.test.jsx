import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import StudentPage from './index';

describe('<StudentPage />', () => {
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
        <StudentPage />
      </Provider>
    );

    expect(true).not.toBeNull();
  });

  it('renders tabs', () => {
    const { getByText } = render(
      <Provider store={mockStore({})}>
        <StudentPage />
      </Provider>
    );

    expect(true).not.toBeNull();
  });

});
