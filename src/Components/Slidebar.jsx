
// 'use client';

import { Badge, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards,HiHome  } from 'react-icons/hi';
import { BiSolidLike } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';


export default function Slidebar() {
  return (
    <Sidebar aria-label="Sidebar with call to action button example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item  icon={HiHome}>
           <Link to={'/'}>Home</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={BiSolidLike}>
            <Link to={'/mylikes'}>MyLikes</Link>
          </Sidebar.Item>
          <Sidebar.Item  icon={FaBookmark}>
            <Link to={'/mybookmark'}>MyBookmark</Link>
          </Sidebar.Item>
          <Sidebar.Item  icon={BsFilePost}>
            <Link to={'/myposts'}>MyPosts</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={CgProfile}>
            <Link to={'/myprofile'}>MyProfile</Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
