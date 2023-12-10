import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { getPost } from '../api';

const columns = [
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'content',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: 'likes',
    dataIndex: 'likes',
    key: 'likes',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const Myposts = () => {
 const [dataSource,setDataSource]=useState([])
 useEffect(()=>{
    getPost().then(data=>setDataSource(data))},[])
  
  return (
    <>
      <Table
      className='ml-24 mt-10 w-1/2'
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.comment}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={dataSource}
  />
    </>
  )
}

export default Myposts