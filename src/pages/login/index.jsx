import React, {Component} from 'react';
import logo from './logo.png'

import {reLogin} from '../../api'
import './index.less'


import LoginForm from '../../components/login-form'

export default class Login extends Component {

  state = {
    errMsg: ''
  }
  //登陆方法
  login = async (username, password) => {
    //请求登陆
    const result = await reLogin(username, password);
    console.log(result);
    if (result.status === 0) {
      //用户登陆成功
      //保存用户信息

      //跳转到admin页面
      this.props.history.replace('/');
    } else {
      //用户登陆失败
      //提示错误信息
      this.setState({
        errMsg: result.msg
      })
    }
  }

  render () {
    const {errMsg}=this.state;
    const height = errMsg? 30:0;
    return (
      <div className='login'>
        <heder className='login-header'>
          <img src={logo} alt="logo"/>
          <h1>React项目: 后台管理系统</h1>
        </heder>
        <section className='login-form'>
          <div className="login-err" style={{height}}>{errMsg}</div>
          <h2>用户登录</h2>
          <LoginForm  login={this.login}/>
        </section>

      </div>
    )
  }
}
