# react-checkbox-group
> Checkbox/checkbox group component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-checkbox-group
```

## properties
| Name         | Type   | Required | Default | Description                           |
| ------------ | ------ | -------- | ------- | ------------------------------------- |
| className    | string | false    | -       | The extended className for component. |
| disabled     | bool   | false    | -       | The input is disabled.                |
| readOnly     | bool   | false    | -       | The input is readOnly.                |
| name         | string | true     | -       | The input name.                       |
| defaultValue | array  | false    | []      | Default value.                        |
| value        | array  | false    | []      | Runtime chnaged value.                |
| items        | array  | false    | []      | The radio group options.              |
| template     | func   | false    | -       | The radio option template.            |
| onChange     | func   | false    | noop    | The handler when value changed.       |


## usage
1. import css
  ```scss
  @import "~@jswork/react-checkbox-group/dist/style.css";

  // or use sass
  @import "~@jswork/react-checkbox-group/dist/style.scss";

  // customize your styles:
  $react-checkbox-group-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactCheckboxGroup from '@jswork/react-checkbox-group';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: ['v1', 'v2'],
      items: [
        {
          label: 'optino1',
          value: 'v1',
          disabled: true
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

    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-checkbox-group">
          <article className="message is-info">
            <div className="message-header">Preview:</div>
            <div className="message-body">
              <ReactCheckboxGroup
                name="abc"
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                }}
                items={this.state.items}
                value={this.state.value}
              />
            </div>
          </article>
          <article className="message">
            <div className="message-header">Value changed:</div>
            <div className="message-body">{JSON.stringify(this.state.value)}</div>
          </article>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-checkbox-group/


## license
Code released under [the MIT license](https://github.com/afeiship/react-checkbox-group/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-checkbox-group
[version-url]: https://npmjs.org/package/@jswork/react-checkbox-group

[license-image]: https://img.shields.io/npm/l/@jswork/react-checkbox-group
[license-url]: https://github.com/afeiship/react-checkbox-group/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-checkbox-group
[size-url]: https://github.com/afeiship/react-checkbox-group/blob/master/dist/react-checkbox-group.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-checkbox-group
[download-url]: https://www.npmjs.com/package/@jswork/react-checkbox-group
