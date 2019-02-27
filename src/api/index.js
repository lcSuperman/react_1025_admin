/*
 定义发送请求函数模块
 */
import  ajax from './ajax'

const prefix = 'http://localhost:5000';
//请求登陆函数
export const reLogin =(username,password)=>{
  ajax(prefix+'/login',{username,password},'POST')
}
//请求添加用户函数
export const adduser =(user)=>{
  ajax(prefix+'/manage/user/add',{user},'POST')
}
