# react-checkbox-group
> Checkbox component for react.


## properties:
```javascript
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func
  };
```

## usage:
```jsx
class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        text: '1234'
      },
      {
        id: 2,
        text: '2345'
      }
    ]
  };

  _template(item, iconEl) {
    return (
      <div className="item">{ iconEl } <span>{item.text}</span></div>
    )
  }

  _change1(inEvent){
    console.log(inEvent.target.value);
  }

  render() {
    return (
      <div className="hello-react-checkbox-group">
        <ReactCheckboxGroup onChange={this._change1.bind(this)} items={this.state.items} template={this._template.bind(this)}/>
      </div>
    );
  }
}


```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

