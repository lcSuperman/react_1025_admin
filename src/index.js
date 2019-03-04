import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {getItem} from './utills/storage'
import Memoryutills from './utills/memoryutills'

const user = getItem();
if(user && user._id){
  Memoryutills.user= user;
}

ReactDOM.render(<App />, document.getElementById('app'))