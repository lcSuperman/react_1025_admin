import React, {Component} from 'react';
import {
  Card ,
  Button,
  Table,
  message,
  Modal,
} from 'antd';
import  {reqCaterories} from  '../../api';
import  {addCategoris} from  '../../api';
import AddCategoty from  '../../components/add-category-form';
import MyButton from '../../components/my-button'
import UpdatecategoryForm from '../../components/update-category -form'




export default class Category extends Component {


  state={
    categories:[],
    visible:false,
    updatevisible:false,
    category:{}
  }

  getcategories= async (parentId)=>{
     const  result = await reqCaterories(parentId)
    if(result.status===0){
    // 获取一级分类列表成功
      this.setState({
        categories:result.data
      })
    }else{
      message.error('获取分类列表失败')
    }
  }

  componentWillMount(){
    this.columns = [{
      title: '品类名称',
      dataIndex: 'name',
      render: text => <span>{text}</span>
    }, {
      title: '操作',
      width:300,
      render: category =>{
        console.log(category);
        return<div>
          <MyButton name='修改名称' onClick={()=>this.setState({updatevisible:true,category})}/> &nbsp;&nbsp;&nbsp;
          <MyButton name='查看其子品类'/>
        </div>
      },
    }];
  }

  componentDidMount(){
  this.getcategories('0');
  }

  //手动取消添加分类对话框
  handleCancel=()=>{
    this.setState({
      visible:false,

    })
  }

  openAddcategory =()=>{
    this.setState({
      visible:true
    })
  }
  //点击确认添加一级和二级分类
  handleOk = async () => {
    const {parentId,categoryName} = this.form.getFieldsValue()
    //  请求后台添加分类
    const result =await addCategoris(parentId,categoryName)
    console.log(result)
    if(result.status===0){
      message.success('添加分类成功')
      this.setState({
        categories:[result.data,...this.state.categories]
      })
      this.form.resetFields();
    }else {
      message.error('添加分类失败')
    }
    this.setState({
      visible:false
    })
  }

  updataAddCatagory=()=>{

  }

  render () {


    const {categories,category} = this.state;


    return(
       <Card
         title="一级分类列表"
         extra={<Button type="primary" icon="plus" onClick={this.openAddcategory}>增加分类</Button>}
       >
         <Table
           columns={this.columns}
           dataSource={categories}
           bordered
           pagination={{
             pageSize: 3,
             showSizeChanger: true,
             pageSizeOptions:['2','4','6'],
             showQuickJumper: true
           }}
           rowKey={'_id'}
           loading={categories.length===0}
         />
         <Modal
           title="添加分类"
           visible={this.state.visible}
           okText={'确认'}
           cancelText={'删除'}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
         >
           <AddCategoty  categories={categories} setform={form=>this.form = form}/>
         </Modal>

         <Modal
           title="修改分类名称"
           visible={this.state.updatevisible}
           okText={'确认'}
           cancelText={'删除'}
           onOk={this.updataAddCatagory}
           onCancel={()=>this.setState({updatevisible:false})}
           width={300}
         >
           <UpdatecategoryForm  categoryName={category.name}/>
         </Modal>


       </Card>

     )

  }
}
