/* eslint-env mocha */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';
import { assert } from 'chai';

describe('Button', () => {
  it('should render a <Button> element', () => {
    const wrapper = shallow(
      <Button />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
