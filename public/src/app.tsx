import React, { useState, useEffect } from 'react';
import ReactAntTable from '../../src/main';
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
        pagination={{ pageSize: 16 }}
        rowKey="id"
      />
    </Container>
  );
};
