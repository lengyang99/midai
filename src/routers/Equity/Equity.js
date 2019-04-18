import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import './Equity.less';

export default class Equity extends Component {
  render() {
    const equityList = [
      { title: '借款特权', icon: 'loan', des: '100%下款' },
      { title: '景点通', icon: 'scenicSpot', des: '不限次数' },
      { title: '机场贵宾厅', icon: 'diamonds', des: '全国通用' },
      { title: '出行安全', icon: 'guarantee', des: '最高保额7w' },
      { title: '精选礼品', icon: 'gift', des: '价值200元' },
      { title: '专属客服', icon: 'customerService', des: '1对1优质服务' },
      { title: '更多权益', icon: 'more', des: '即将上线' },
    ];
    return (
      <div>
        <NavBar mode="light" icon={<Icon type="left" />}>会员权益</NavBar>
        <div className='content'>
          <div className='card'></div>
          <div className='equity'>
            <div className='equity-title'>
              <div className='title-block'></div>
              <div className='title-text'>会员权益</div>
            </div>
            <div className='equity-list'>
              {equityList.map(item => (<div className='equity-item'>
                <div className='item-icon'><div className={`item-icon-${item.icon}`}></div></div>
                <div className='item-title'>{item.title}</div>
                <div className='item-des'>{item.des}</div>
              </div>))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
