/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button from './Button';

const handler = () => true;

it('renders colors correctly', () => {
  const wrapper = mount(
    <div>
      <Button btn="" className="margin:7"> Done </Button>
      <Button btn="action" className="margin:7"> Done </Button>
      <Button btn="warning" className="margin:7"> Done </Button>
      <Button btn="critical" className="margin:7"> Done </Button>
      <Button btn="positive" className="margin:7"> Done </Button>
      <Button btn="negative" className="margin:7"> Done </Button>
    </div>
  );

  expect(wrapper).toMatchSnapshot();
});
