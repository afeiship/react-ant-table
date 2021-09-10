# react-ant-table
> Antd table.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-table
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-table/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-table/dist/style.scss";

  // customize your styles:
  $react-ant-table-options: ()
  ```
2. import js
  ```js
  import React, { useState, useEffect } from 'react';
  import ReactAntTable from '@jswork/react-ant-table';
  import '../../src/components/style.scss';
  import styled from 'styled-components';
  import nxColumn from '@jswork/next-ant-column';
  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
    height: 100vh;
    border: 1px solid #ccc;
  `;

  export default (props: any) => {
    const [dataSource, setDataSource] = useState([]);
    const columns = [nxColumn('ID', 'id'), nxColumn('Title', 'title'), nxColumn('UserId', 'userId')];

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((res) => {
          setDataSource(res);
        });
    }, []);

    return (
      <Container>
        <ReactAntTable
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 15 }}
          rowKey="id"
        />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-ant-table/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-table/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-table
[version-url]: https://npmjs.org/package/@jswork/react-ant-table

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-table
[license-url]: https://github.com/afeiship/react-ant-table/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-table
[size-url]: https://github.com/afeiship/react-ant-table/blob/master/dist/react-ant-table.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-table
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-table
