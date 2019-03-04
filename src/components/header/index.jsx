import React, {Component} from 'react';
import './index.less';
import {Row,Col,Modal} from 'antd';
import {withRouter} from 'react-router-dom'
import menuList from '../../config/menuconfig'
import Memoryutills from '../../utills/memoryutills'
import {removeItem} from '../../utills/storage'
import MyButton from '../../components/my-button'
const confirm = Modal.confirm;



class Header extends Component {
  //退出登录函数
  logOut =()=>{
    confirm({
      title: '你确定要退出登陆吗?',
      onOk:()=> {
       this.props.history.replace('/login')
        //  删除用户信息
        Memoryutills.user={}
        removeItem()
      },
      onCancel() {

      },
      okText: '必须的',
      cancelText: '我不干',
    });
  }

  //获取头部导航标题
  getTitle=()=>{
  const {pathname}=this.props.location;
    for (var i = 0; i <menuList.length; i++) {
       let item = menuList[i];
       if(item.children){

         for (var j = 0; j < item.children.length; j++) {
           let cItem = item.children[j]
           if(cItem.key===pathname){
             return cItem.title
           }
         }
       }else{
         if(item.key===pathname){
           return item.title
         }
       }

    }


  }
  render () {
    const {username}= Memoryutills.user;
    const title = this.getTitle();


    return (
      <div className='header'>
        <Row className='header-top'>
          <span>欢迎, {username}</span>
          <MyButton name='退出' onClick={this.logOut}/>
        </Row>
        <Row className='header-bottom'>
          <Col span={6} className='header-bottom-left'>{title}</Col>
          <Col span={18} className='header-bottom-right'>
            时间+ 天气</Col>
        </Row>
      </div>
    )
  }
}
export default withRouter(Header)