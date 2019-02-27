/*
 定义发送请求函数模块
 */
import  ajax from './ajax'

//请求登陆函数
const prefix = process.env.NODE_ENV === 'development' ? '' : 'http://localhost:5000';

//请求登陆函数
export const reLogin = (username, password) => ajax(prefix + '/login', {username, password}, 'POST');
//请求添加用户函数
export const reAddUser = user => ajax(prefix + '/manage/user/add', user, 'POST');