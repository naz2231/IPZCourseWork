import React from 'react';
import { render } from '@testing-library/react';
import AddHostelResident from './AddHostelResident';
import AddInventory from './AddInventory';

describe('<AdHostelResident />', () => {
  it('renders routing element', () => {
    const { getByText} = render(<AddHostelResident />)
    expect(getByText('Submit')).not.toBe(null);
  });
});

describe('<AddInventory />', () => {
  it('renders routing element', () => {
    const { getByText} = render(<AddInventory />)
    expect(getByText('Submit')).not.toBe(null);
  });
});

