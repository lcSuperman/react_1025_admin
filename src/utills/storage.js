/*
* 用来封装储存数据的方法
*/
import store from 'store'

const USER_KEY = 'user'

//保存数据的函数
export const setItem =value=>{
  if(value && typeof value !== 'function'){
    store.set(USER_KEY, value)
  }else{
    console.log('保存失败')
  }
}


//读取保存数据的函数
export  const getItem =()=>{
   const value =   store.get(USER_KEY)
  return value|| ''
}

//删除保存数据的函数
export const removeItem =()=>{
  store.remove(USER_KEY)
}