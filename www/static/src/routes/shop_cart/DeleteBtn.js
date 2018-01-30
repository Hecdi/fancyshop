import React from 'react';
import { Button,Flex,Checkbox,Modal} from 'antd-mobile';
import {Link} from 'react-router-dom';
import style from './common.css';
import { connect } from 'react-redux';
import { cartInfo } from '../../map_props';
import { removeCart,shopCheckAll } from '../../reducers/cart.redux';


const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

class DeleteBtn extends React.Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this)
    this.CheckAll = this.CheckAll.bind(this)

  }

  delete() {
    const alertInstance = alert('', '确认将已选中的商品删除吗?', [
      { text: '取消', onPress: () => console.log('cancel')},
      { text: '删除', onPress: () => this.props.removeCart(this.props.cart.goods)},
    ]);
  }

  deleteProduct() {
    console.log(this.props.cart.goods)
    let shopsData = this.props.cart.goods.shopsData;
    console.log(shopsData)
  }

  

  CheckAll(e) {
    let data = this.props.cart.goods
    for(var i=0;i<data.shopsData.length;i++){
      data.shopsData[i].checked = e.target.checked;
      for(var j=0;j<data.shopsData[i].productsData.length;j++){
        data.shopsData[i].productsData[j].checked = e.target.checked;
      }
    }
    this.props.shopCheckAll(data)
  }


  render(){
    return (
      <div style = {{position:'fixed',bottom:'50px',marginTop:'20px',width:'100%'}}>
      <Flex>
        <div style = {{flexGrow:'1',color:'#fff'}}>
          <CheckboxItem style = {{backgroundColor:'#333',color:'#fff',paddingLeft:'7px'}} onChange={(e)=>this.CheckAll(e)}>
            <span style= {{color:'#fff',lineHeight:'1.95em'}}>全选</span>
          </CheckboxItem>
        </div>
        <button style = {{flexGrow:'1',backgroundColor:'red',justifyContent:'center',backgroundColor:'red',color:'#fff',borderRadius:'0',border:'none',fontSize:'17px',lineHeight:'2.7em',color:'#fff'}} onClick={this.delete}>删除</button>
      </Flex>

    </div>

    )
  }
}

export default connect(cartInfo,{removeCart,shopCheckAll})(DeleteBtn);