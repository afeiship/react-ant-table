import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    value:React.PropTypes.bool,
    onChange:React.PropTypes.func,
  };

  static defaultProps = {
    value:false,
    onChange:null
  };

  constructor(props) {
    super(props);
    this.state = {
      value:props.value
    };
  }

  _onClick(){
    this.setState({
      value:!this.state.value
    });
    this.props.onChange(this.state);
  }

  render(){
    return (
      <span onClick={()=>{this._onClick()}} className={classNames('react-checkbox',this.props.cssClass)}>
        {this.props.children}
      </span>
    );
  }
}
