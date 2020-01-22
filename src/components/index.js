import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-checkbox-group';
const DEFAULT_TEMPLATE = ({ item, index }, cb) => {
  const { value, label } = item;
  return (
    <label key={value} className={`${CLASS_NAME}__item`}>
      {cb()}
      <span className="is-label">{label}</span>
    </label>
  );
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    items: PropTypes.array,
    template: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: [],
    defaultValue: [],
    items: [],
    template: DEFAULT_TEMPLATE,
    onChange: noop
  };

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

  onChange = () => {
    const { onChange } = this.props;
    onChange({ target: { value: this.value } });
  };

  render() {
    const {
      className,
      name,
      items,
      template,
      defaultValue,
      onChange,
      ...props
    } = this.props;

    return (
      <section
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        ref={(root) => (this.root = root)}
        {...props}>
        {items.map((item, index) => {
          const { value, label, ...itemProps } = item;
          const cb = () => {
            return (
              <input
                defaultChecked={defaultValue.indexOf(value) > -1}
                name={name}
                type="checkbox"
                data-value={value}
                onChange={this.onChange}
                className="is-field"
                {...itemProps}
              />
            );
          };

          return template({ item, index }, cb);
        })}
      </section>
    );
  }
}
