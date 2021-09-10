import cx from 'classnames';
import React, { Component } from 'react';
import { Table, TableProps } from 'antd';

const CLASS_NAME = 'react-ant-table';

export interface ReactAntTableProps extends TableProps<any> {}

export default class ReactAntTable extends Component<ReactAntTableProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    const { className, ...props } = this.props;
    return <Table className={cx(CLASS_NAME, className)} {...props} />;
  }
}
