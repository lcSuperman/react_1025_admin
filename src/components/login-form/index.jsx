import React, {Component} from 'react';
import {Form, Icon, Input, Button, } from 'antd';
 class LoginForm extends Component {


  render () {

    const { getFieldDecorator } = this.props.form;
    return (
        <Form className='formContent'>
          <Form.Item>
            {getFieldDecorator('userName',
              {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )
            }
          </Form.Item>
          <Form.Item>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
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