import './dev.scss';
import ReactCheckbox from './main';


class App extends React.Component{
  _change(state){
    console.log(state);
  }
  render(){
    return (
      <div className="hello-react-checkbox">
        <ReactCheckbox onChange={this._change.bind(this)}>
          <button>Toggle</button>
        </ReactCheckbox>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
