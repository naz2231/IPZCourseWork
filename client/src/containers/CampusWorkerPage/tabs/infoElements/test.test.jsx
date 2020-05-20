import React from 'react';
import { render } from '@testing-library/react';
import CountPayments from './CountPayments';
import HostelInfo from './HostelInfo';
import HostelResidentInfo from './HostelResidentInfo'

describe('<CountPayments />', () => {
  it('renders right elements', () => {
    const { getByText} = render(<CountPayments />)
    expect(getByText('Hostel resident')).not.toBe(null);
  });
});

describe('<HostelInfo />', () => {
  it('renders right elements', () => {
    const { getByText} = render(<HostelInfo />)
    expect(getByText('Hostel #')).not.toBe(null);
  });
});

describe('<HostelResidentInfo />', () => {
  it('renders right elements', () => {
    const { getByText} = render(<HostelResidentInfo />)
    expect(getByText('Student lasname')).not.toBe(null);
  });
});

