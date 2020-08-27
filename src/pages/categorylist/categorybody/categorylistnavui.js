/** @jsx jsx */

import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { List } from 'antd-mobile';
import { jsx } from '@emotion/core';

const { Item } = List;

const a = [['热门推荐', 'WQR2006'], ['手机数码', 'WQ1980'], ['电脑办公', 'WQ1981'], ['家用电器', 'WQ1982'], ['计生情趣', 'WQ1988'], ['美妆护肤', 'WQ2044'], ['个护清洁', 'WQ2046'], ['汽车生活', 'WQ1990'], ['京东超市', 'WQ1968'], ['男装', 'WQ1972'], ['男鞋', 'WQ1974'], ['女装', 'WQ1973'], ['女鞋', 'WQ1975'], ['母婴童装', 'WQ1985'], ['图书音像', 'WQ1996'], ['运动户外', 'WQ1989'], ['内衣配饰', 'WQ1976'], ['食品生鲜', 'WQ1983'], ['酒水饮料', 'WQ1984'], ['家具家装', 'WQ1992'], ['家居厨具', 'WQ1991'], ['箱包手袋', 'WQ1977'], ['钟表珠宝', 'WQ1979'], ['玩具乐器', 'WQ1986'], ['医药保健', 'WQ1987'], ['宠物生活', 'WQ1994'], ['礼品鲜花', 'WQ1993'], ['农资绿植', 'WQ1998'], ['生活旅行', 'WQ1995'], ['奢侈品', 'WQ1970'], ['京东国际', 'WQ1971'], ['艺术邮币', 'WQ1997'], ['二手商品', 'WQ2002'], ['特产馆', 'WQ1999'], ['京东金融', 'WQ2000'], ['国际名牌', 'WQ1969'], ['拍卖', 'WQ2001'], ['房产', 'WQ2008'], ['工业品', 'WQ2102']];

const data = a.map((_val) => ({
  text: _val[0],
  cid: _val[1],
}));

const CategoryListNavUi = (props) => {
  // useEffect(() => {
  //   const amlistitemdom = document.getElementsByClassName('am-list-item');
  //   const mylistdom = document.getElementById('mylist');

  //   for (let i = 0; i < amlistitemdom.length; i += 1) {
  //     amlistitemdom[i].removeEventListener('click', () => { }, false);
  //     let y0; let y1;

  //     amlistitemdom[i].addEventListener('touchstart', (e) => {
  //       const touch = e.touches[0]; // 获取第一个触点
  //       y0 = Number(touch.pageY);
  //       // console.log('y0=',y0)
  //     }, false);

  //     amlistitemdom[i].addEventListener('touchmove', (e) => {
  //       const touch = e.touches[0]; // 获取第一个触点
  //       y1 = Number(touch.pageY);
  //       // console.log('y1=',y1)
  //     }, false);

  //     amlistitemdom[i].addEventListener('touchend', (e) => {
  //       // e.preventDefault()
  //       const footwrapdom = document.getElementById('footwrap');
  //       const itemdom = e.target;
  //       const itemdomoffset = itemdom.offsetTop;
  //       const mylistdomoffset = mylistdom.offsetTop;
  //       const footwrapdomoffset = footwrapdom.offsetTop;
  //       const mylistdomtranslateY = parseInt(window.getComputedStyle(mylistdom).transform.split(',')[5], 10);
  //       const itemdomHeight = parseInt(window.getComputedStyle(itemdom).height, 10);
  //       const mylistdomheight = parseInt(window.getComputedStyle(mylistdom).height, 10);
  //       // 当前（即每一个item）Height
  //       const itemdomheight = parseInt(window.getComputedStyle(itemdom).height, 10);
  //       // 所有item的数量
  //       // const itemNum = mylistdomheight / itemdomheight;
  //       // 当前页面itemlist需要显示的个数
  //       const itemNuminpage = Math.floor(footwrapdomoffset / itemdomheight);
  //       console.log('mylistdomtranslateY', mylistdomtranslateY);

  //       if (y1) {
  //         const distance = Math.floor((y1 - y0) / itemdomHeight) * itemdomHeight;
  //         // console.log('distance',distance)
  //         if (distance) {
  //           // console.log('mylistdomtranslateY=',mylistdomtranslateY)
  //           if (mylistdomtranslateY > mylistdomoffset) {
  //             mylistdom.style.transform = `translateY(${itemdomoffset}px)`;
  //           } else if (mylistdomtranslateY < `-${mylistdomheight - itemNuminpage * itemdomheight}`) {
  //             mylistdom.style.transform = `translateY(-${mylistdomheight - itemNuminpage * itemdomheight}px)`;
  //           } else {
  //             mylistdom.style.transform = `translateY(${-itemdomoffset + distance}px)`;
  //           }
  //         }
  //       }
  //     }, false);
  //   }

  //   // return(()=>{mylistdom.addEventListener('click',(e)=>{console.log('addclick')},false)})
  // });

  const handleClick = (e, item, index) => {
    e.stopPropagation();
     /* 被点击item的字体颜色 背景变化 */
    const itemlist = document.getElementsByClassName('am-list-content');
    for (let i = 0; i < itemlist.length; i += 1) {
      itemlist[i].style.color = '#000';
      itemlist[i].style.background = 'rgba(239,255,239,.7)';
    }
    e.target.style.color = '#ff5b05 !important';
    e.target.style.background = '#fff !important';
    /* 被点击的整个导航栏的向上移动逻辑 */
    // 需要移动的整个itemlist dom
    const mylistdom = document.getElementById('mylist');
    // 当前点击item的dom
    const itemdom = document.getElementById(`${item.cid}`);
    // 最后一个item 的 dom
    // const lastitemdom = document.getElementById(`${data[data.length - 1].cid}`);
    // 页面部分最最低处元素的 dom
    const footwrapdom = document.getElementById('footwrap');
    // 当前被点击元素距离的offsetTop
    const itemdomoffset = itemdom.offsetTop;
    // console.log(`itemdomoffset${index}=`, itemdomoffset);
    // 页面部分最最低处元素的 offsetTop（可以理解为itemlist在页面所能显示的高度）
    const footwrapdomoffset = footwrapdom.offsetTop;
    // 需要移动的整个itemlist height
    const mylistdomheight = parseInt(window.getComputedStyle(mylistdom).height, 10);
    // 当前（即每一个item）Height
    const itemdomheight = parseInt(window.getComputedStyle(itemdom).height, 10);
    // 所有item的数量
    const itemNum = mylistdomheight / itemdomheight;
    // 当前页面itemlist需要显示的个数
    const itemNuminpage = Math.floor(footwrapdomoffset / itemdomheight);
    // 能够点击向上移动的最后一个元素item的 index
    const lastItemIndex = itemNum - 1 - itemNuminpage;
    // 如果被点击的元素的index是在lastItemIndex之前的，移动距离就是这个元素的offsetTop
    // 如果是在此之后的就是最大位移距离 mylistdomheight -itemNuminpage*itemdomheight
    if (index < lastItemIndex) {
      mylistdom.style.transform = `translateY(-${itemdomoffset}px)`;
      mylistdom.style.transition = 'all 1 ease-in';
    } else {
      mylistdom.style.transform = `translateY(-${mylistdomheight - itemNuminpage * itemdomheight}px)`;
      mylistdom.style.transition = 'all 1 ease-in';
    }
    /* 子级动态路由跳转命令 */

    props.history.push(`/categorylist/${item.cid}`);
  }

  return (
    <List id="mylist" style={{ overflow:'scroll' }}>
      {data.map((item, index) => (
        <Item
          id={item.cid}
          key={Math.random()}
          onClick={(e) => { handleClick(e, item, index) }}
        >
          {item.text}
        </Item>
      ))}

    </List>
  );
};

export default withRouter(CategoryListNavUi);
