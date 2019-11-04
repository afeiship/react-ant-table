# react-checkbox-group
> Checkbox/checkbox group component for react.

## install
```shell
npm install -S afeiship/react-checkbox-group
```

## usage
1. import css
  ```scss
  @import "~react-checkbox-group/style.scss";

  // customize your styles:
  $react-checkbox-group-options: ()
  ```
2. import js
  ```js
  import ReactCheckboxGroup from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
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

    render() {
      return (
        <div className="app-container">
          <ReactCheckboxGroup
            onChange={(e) => {
              console.log('change:', e.target.value);
            }}
            items={this.state.items}
            defaultValue={this.state.defaultValue}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-checkbox-group/
