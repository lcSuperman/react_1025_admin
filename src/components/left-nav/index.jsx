import React, {Component} from 'react';
import './index.less'
import logo from '../../assets/images/logo.png'
import {Menu, Icon, } from 'antd';
import {NavLink, withRouter} from 'react-router-dom'
import menuList from '../../config/menuconfig'
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;


class LeftNav extends Component {

  componentWillMount() {
    this.menu = this.CreateMenu(menuList)
  };

  CreateMenu = (menu)=>{
     return menu.map((item) => {
      if (item.children) {
        const {pathname}= this.props.location;
        const result = item.children.find(item=>{
           return pathname.indexOf(item.key) === 0
        })

        if(result){
          this.oprenkey = item.key
        }
        return <SubMenu key={item.key} title={<span><Icon type={item.icon}/><span>{item.title}</span></span>}>
          {
           this.CreateMenu(item.children)
          }
        </SubMenu>

      } else {
        return <Item key={item.key}>
          <NavLink to={item.key}>
            <Icon type={item.icon}/>
            <span >{item.title}</span>
          </NavLink>
        </Item>
      }
    })
  }

  render() {
    let  {pathname} = this.props.location;

    if (/^\/product/.test(pathname)) {
      pathname = '/product';
    }
    return (
      <div className='left-nav'>
        <header className='nav-header'>
          <NavLink to='/home' className='nav-header1'>
            <img src={logo} alt="logo"/>
            <h2>硅谷后台</h2>
          </NavLink>
        </header>
        <Menu theme="dark" mode="inline"
              selectedKeys={[pathname]}
              defaultOpenKeys={[ this.oprenkey]}>
          {
            this.menu
          }
        </Menu>
      </div>
    )
  }
}

export default withRouter(LeftNav)
