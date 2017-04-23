import './style.scss';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    align: PropTypes.string,
  };

  static defaultProps = {
    checked: false,
    align: 'left'
  };

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState(nextProps);
  }


  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  _onClick() {
    this.setState({checked: !this.state.checked})
  }

  render() {
    const {align, className, children, ...props} = this.props;
    return (
      <div {...props} data-checked={this.state.checked} onClick={this._onClick.bind(this)}
           className={classNames('react-checkbox', className)}>
        {align === 'left' && <i className="react-checkbox-icon"/>}
        {children}
        {align === 'right' && <i className="react-checkbox-icon"/>}
      </div>
    );
  }
}
