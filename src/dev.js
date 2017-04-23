import './dev.scss';
import ReactCheckbox from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-checkbox">
        <ReactCheckbox checked={true}> Option1 </ReactCheckbox>
        <ReactCheckbox checked={true}> Option2 </ReactCheckbox>
        <ReactCheckbox checked={true}> Option3 </ReactCheckbox>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
