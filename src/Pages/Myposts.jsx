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
// const data = [
//   {
//     key: 1,
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
//   },
//   {
//     key: 2,
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
//   },
//   {
//     key: 3,
//     name: 'Not Expandable',
//     age: 29,
//     address: 'Jiangsu No. 1 Lake Park',
//     description: 'This not expandable',
//   },
//   {
//     key: 4,
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
//   }, 
// ];

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