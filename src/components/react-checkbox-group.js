import './style.scss';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import {ReactSelectedItems, ReactSelectedItem} from 'react-selected-items';


export default class extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func
  };

  static defaultProps = {
    items: [],
    template: noop,
  };

  render() {
    const {className, template, items, ...props} = this.props;
    return (
      <ReactSelectedItems type="checkbox" {...props} className={classNames('react-checkbox-group', className)}>
        {
          items.map((item, index) => {
            return (
              <ReactSelectedItem data={item} key={index} className="react-checkbox">
                {template(item, <i className="react-checkbox-icon"/>)}
              </ReactSelectedItem>
            );
          })
        }
      </ReactSelectedItems>
    );
  }
}

