import React, {Component} from 'react';
import './index.less'
import logo from '../../assets/images/logo.png'
import { Menu, Icon, Button } from 'antd';
import {NavLink} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

export default class LeftNav extends Component {
  render () {
    return (
      <div className='left-nav'>
         <header className='nav-header'>
           <NavLink to='/home' className='nav-header1'>
             <img src={logo} alt="logo"/>
             <h2>硅谷后台</h2>
           </NavLink>
         </header>
        <Menu  theme="dark" mode="inline">
          <Item key="1">
            <NavLink to='/home'>
              <Icon type="home" />
              <span >首页</span>
            </NavLink>
          </Item>
          <SubMenu key="sub1" title={<span><Icon type="shop" /><span>商品</span></span>}>
            <Menu.Item key="2"><NavLink to='/product'><Icon type="shopping-cart" />商品上架</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to='/category'><Icon type="tag" />品类管理</NavLink></Menu.Item>
          </SubMenu>
          <Item key="4">
            <NavLink to='/home'>
              <Icon type="user" />
              <span >用户管理</span>
            </NavLink>
          </Item>
          <Item key="5">
            <NavLink to='/home'>
              <Icon type="safety" />
              <span >权限管理</span>
            </NavLink>
          </Item>
          <SubMenu key="sub2" title={<span><Icon type="area-chart" /><span>图形图标</span></span>}>
            <Menu.Item key="6"><NavLink to='/home'><Icon type="bar-chart" />柱状图</NavLink></Menu.Item>
            <Menu.Item key="7"><NavLink to='/home'><Icon type="line-chart" />条形图</NavLink></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
