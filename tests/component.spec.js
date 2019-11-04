import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactCheckboxGroup from '../src/main';

describe('Basic Test', () => {
  test('set default values', () => {
    const state = {
      defaultValue: ['v1', 'v2'],
      items: [
        {
          label: 'optino1',
          value: 'v1'
        },
        {
          label: 'optino2',
          value: 'v2'
        },
        {
          label: 'optino3',
          value: 'v3'
        }
      ]
    };
    const component = mount(<ReactCheckboxGroup {...state} />);
    const values = [];
    component.find('.is-field').forEach((item) => {
      const { checked, dataset } = item.getDOMNode();
      checked && values.push(dataset.value);
    });

    expect(values).toEqual(['v1', 'v2']);
    // expect(cnt).toMatch(/Hello React/);
  });
});
