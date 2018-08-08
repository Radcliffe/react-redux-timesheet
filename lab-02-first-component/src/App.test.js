import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('renders without exploding', () => {
    expect(shallow(<App />)).toHaveLength(1);
  });

  it('contains the Hello component', () => {
    const app = mount(<App />);
    expect(app.find('Hello')).toExist();
  });
});
