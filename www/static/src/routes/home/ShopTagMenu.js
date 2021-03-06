import React from 'react';
import { connect } from 'react-redux';
import { appInfo } from '../../map_props.js';

import { Flex } from 'antd-mobile';
import addImg from '../../assets/img/home/add.png'
import barImg from '../../assets/img/home/bar.png'
import beautyImg from '../../assets/img/home/beauty.png'
import runImg from '../../assets/img/home/run.png'
import shopImg from '../../assets/img/home/shop.png'
import styles from './ShopTagMenu.css';
import { Link } from 'react-router-dom';

const icons = [addImg, barImg, beautyImg, runImg, shopImg]

class ShopTagMenu extends React.Component {

  renderTagItem(tagId, tagName, index){

    return (
      <Link  key={index}  to={'/shops/'+tagId.toString()}>
      <Flex direction = "column" justify = "center">
        <img src = {icons[index]} alt = "标签{tagName}" className = {styles['Img-size']}/>
        <p>{tagName}</p>
      </Flex>
      </Link>
    )
  }
  componentwillunmount(){
  }

render(){
  let tags =null;
  if (this.props.AppInfo.homeTags.length >= 0) {
    tags = this.props.AppInfo.homeTags.map((item, index) => {
      return this.renderTagItem(item.id, item.fields.name, index);
    })
  }

  return(
  <div className = {styles['all']}>
    <Flex justify = "center" className = {styles['main']}>
      {tags}
    </Flex>
  </div>
    )
  }
}
export default connect(appInfo)(ShopTagMenu);
