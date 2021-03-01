import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCheckboxGroup from '../src/main';
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
