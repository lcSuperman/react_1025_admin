import React, {Component} from 'react';
import {Input, Form} from 'antd'
import PropTypes from  'prop-types'

 class UpdatecategoryForm extends Component {

  static  propTypes={
    categoryName:PropTypes.string.isRequired
  }

  render () {
    const {getFieldDecorator,} = this.props.form;
    const {categoryName} = this.props;
    return (
      <Form>
        <Form.Item >
          {getFieldDecorator(
            'categoryName',
            {
              initialValue:categoryName
            }

          )
          ( <Input  />)
          }

        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(UpdatecategoryForm)

