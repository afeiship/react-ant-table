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

  test('set disabled',()=>{
    const state = {
      items: [
        {
          label: 'optino1',
          value: 'v1',
          disabled: true
        },
        {
          label: 'optino2',
          value: 'v2'
        }
      ]
    };

    const component = mount(<ReactCheckboxGroup {...state} />);
    const fields = component.find('.is-field');

    // fileds
    expect(fields.at(0).getDOMNode().disabled).toBe(true);
    expect(fields.at(1).getDOMNode().disabled).toBe(false);

  })
});
