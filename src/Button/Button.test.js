/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button from './Button';

const handler = () => true;

it('renders colors correctly', () => {
  const wrapper = mount(
    <Button btn="raised small action sharp">Done</Button>,
  );

  expect(wrapper).toMatchSnapshot();
});
