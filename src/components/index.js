import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-checkbox-group';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    items: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: [],
    defaultValue: [],
    items: [],
    onChange: noop
  };
  /*===properties end===*/

  get value() {
    const result = [];
    if (this.root) {
      const fields = this.root.querySelectorAll(`.${CLASS_NAME} .is-field`);
      fields.forEach((item) => {
        item.checked && result.push(item.dataset.value);
      });
    }
    return result;
  }

  _onChange = () => {
    const { onChange } = this.props;
    onChange({ target: { value: this.value } });
  };

  render() {
    const {
      className,
      name,
      items,
      defaultValue,
      onChange,
      ...props
    } = this.props;
    return (
      <section
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
        ref={(root) => (this.root = root)}>
        {items.map((item) => {
          const { value, label, ...itemProps } = item;
          return (
            <label key={value} className={`${CLASS_NAME}__item`}>
              <input
                defaultChecked={defaultValue.indexOf(value) > -1}
                name={name}
                type="checkbox"
                data-value={value}
                onChange={this._onChange}
                className="is-field"
                {...itemProps}
              />
              <span className="is-label">{label}</span>
            </label>
          );
        })}
      </section>
    );
  }
}
