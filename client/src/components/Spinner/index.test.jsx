import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './index';

describe('<Spinner />', () => {
 
  it('renders username', () => {
    const { getByText } = render(<Spinner />);

    expect(getByText('Loading')).not.toBeNull();
  });
});
