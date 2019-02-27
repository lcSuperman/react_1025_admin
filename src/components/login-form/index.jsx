import React, {Component} from 'react';
import {Form, Icon, Input, Button, message } from 'antd';
import {reLogin}   from '../../api'

 class LoginForm extends Component {

   HandleSubmit =e=>{
     const {validateFields, resetFields} = this.props.form;
     e.preventDefault();
     validateFields(async (error, values) =>{
       console.log(error,values)
       if(!error){
         console.log(values)
         const {userName,password} = values;
       //  发送ajax请求
         const result =await reLogin(userName,password);
         console.log(result)

       }else{
         resetFields(['userName','password'])
         const errMsg = Object.values(error).reduce((prev, curr) => prev + curr.errors[0].message + ' ', '')
         message.error(errMsg);

       }

     })
   }
  render () {

    const { getFieldDecorator } = this.props.form;
    return (
        <Form className='formContent' onSubmit={this.HandleSubmit}>
          <Form.Item>
            {getFieldDecorator('userName',
              {
              rules: [
                { required: true, message: '请输入用户名!' },
                {min:4,message: '用户名不能小于4个字，'},
                {max:11,message: '用户名不能大于11个字，'},
                {pattern:/^[a-zA-Z0-9]{4,11}$/,message: '必须是字母或者数字 '}
                ],
              })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )
            }
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password',
              {
                rules: [
                  { required: true, message: '请输入密码!' },
                  {min:4,message: '密码不能小于4个数字，'},
                  {max:16,message: '密码不能大于16个熟字，'},
                  {pattern:/^[a-zA-Z0-9]{4,16}$/,message: '必须是字母或者数字 '}
                ],
              })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  type="password" placeholder="密码" />
            )
            }
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
          </Form.Item>

        </Form>
    )
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;