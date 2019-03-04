import React, {Component} from 'react';
import logo from '../../assets/images/logo.png'

import {reLogin} from '../../api'
import './index.less'
import {setItem} from '../../utills/storage'
import Memoryutills from '../../utills/memoryutills'

import LoginForm from '../../components/login-form'

export default class Login extends Component {

  state = {
    errMsg: ''
  }
  //登陆方法
  login = async (username, password) => {
    //请求登陆
    const result = await reLogin(username, password);
    if (result.status === 0) {
      //用户登陆成功
      //保存用户信息
        setItem(result.data)
        console.log(result.data);
      //  在内存中保存信息
       Memoryutills.user =result.data
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
        <header className='login-header'>
          <img src={logo} alt="logo"/>
          <h1>React项目: 后台管理系统</h1>
        </header>
        <section className='login-form'>
          <div className="login-err" style={{height}}>{errMsg}</div>
          <h2>用户登录</h2>
          <LoginForm  login={this.login}/>
        </section>

      </div>
    )
  }
}
