import React, {Component} from 'react';
import { Row, Col } from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './index.less'
import {Switch,BrowserRouter as Router,Redirect }from 'react-router-dom'
import Home from '../home'
import Category from '../category'
import Product from '../product'

export default class Admin extends Component {
  render () {
    return (
      <Row className='admin'>
        <Col span={4}>
          <LeftNav/>
        </Col>
        <Col span={20}>
          <Header/>
          <div className='content'>
            <Switch>
              <Router path='/home' component={Home}/>
              <Router path='/category' component={Category}/>
              <Router path='/product' component={Product}/>
              <Redirect to='/home'/>
            </Switch>
          </div>
          <Footer/>
        </Col>
      </Row>
    )
  }
}
