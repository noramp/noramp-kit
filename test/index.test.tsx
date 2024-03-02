import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NoRampCheckout } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoRampCheckout priceId="" testnet />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
