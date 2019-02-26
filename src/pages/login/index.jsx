import React, {Component} from 'react';
import logo from './logo.png'
import './index.less'

import LoginForm from '../../components/login-form'

export default class Login extends Component {
  render () {
    return (
      <div className='login'>
        <heder className='login-header'>
          <img src={logo} alt="logo"/>
          <h1>React项目: 后台管理系统</h1>
        </heder>
        <section className='login-form'>
          <h2>用户登录</h2>
          <LoginForm />
        </section>

      </div>
    )
  }
}
