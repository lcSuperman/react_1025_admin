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

//请求获取一级和二级商品分类
export const  reqCaterories = parentId=>ajax(prefix+'/manage/category/list',{parentId},'GET')

//请求添加分类的函数
export  const addCategoris = (parentId,categoryName)=>ajax(prefix+'/manage/category/add',{parentId,categoryName},'POST')
//请求分页商品列表数据的函数
export const reqProductsList = (pageNum, pageSize) => ajax(prefix + '/manage/product/list', {pageNum, pageSize})

//请求搜索商品列表数据函数
export const reqSearchProductsList = ({pageNum, pageSize, searchType, searchName}) => ajax(prefix + '/manage/product/search', {pageNum, pageSize, [searchType]: searchName})