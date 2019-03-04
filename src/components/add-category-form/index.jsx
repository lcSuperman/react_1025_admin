import React, {Component} from 'react';
import {
  Select,
  Input,
  Form
} from 'antd';
import PropTypes from 'prop-types';
const Option = Select.Option;

class AddCategoty extends Component {
  static propTypes={
    categories:PropTypes.array.isRequired,
    setform:PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.setform(this.props.form)
  }
  render () {
    const {getFieldDecorator}=this.props.form;
    const {categories}=this.props;
    return (
      <Form>
        <Form.Item label="所属分类：">
          { getFieldDecorator(
            'parentId',
            {
              initialValue:'0'
            }
          )(
          <Select style={{ width: 472 }}>
            <Option value="0">一级分类</Option>
            {
              categories.map((item,index)=>{
                return <Option key={item._id} value={item._id}>{item.name}</Option>
              })
            }
          </Select>
          )}

        </Form.Item>
        <Form.Item label="分类名称">
          {getFieldDecorator(
           'categoryName',
            {  }

          )
          (<Input placeholder="请输入分类名称"/>)
          }

        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(AddCategoty)
