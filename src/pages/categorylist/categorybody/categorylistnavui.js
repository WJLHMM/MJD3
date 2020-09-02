/** @jsx jsx */
import React, { useEffect } from 'react';
// import {  } from 'react-router';
import { withRouter, NavLink, Link  } from 'react-router-dom';
import { List } from 'antd-mobile';
import { jsx, css } from '@emotion/core';
import Swiper from 'swiper'

import { listyle } from '@/pages/categorylist/categorybody/categorybodystyle'

const a = [['热门推荐', 'WQR2006'], ['手机数码', 'WQ1980'], ['电脑办公', 'WQ1981'], ['家用电器', 'WQ1982'], ['计生情趣', 'WQ1988'], ['美妆护肤', 'WQ2044'], ['个护清洁', 'WQ2046'], ['汽车生活', 'WQ1990'], ['京东超市', 'WQ1968'], ['男装', 'WQ1972'], ['男鞋', 'WQ1974'], ['女装', 'WQ1973'], ['女鞋', 'WQ1975'], ['母婴童装', 'WQ1985'], ['图书音像', 'WQ1996'], ['运动户外', 'WQ1989'], ['内衣配饰', 'WQ1976'], ['食品生鲜', 'WQ1983'], ['酒水饮料', 'WQ1984'], ['家具家装', 'WQ1992'], ['家居厨具', 'WQ1991'], ['箱包手袋', 'WQ1977'], ['钟表珠宝', 'WQ1979'], ['玩具乐器', 'WQ1986'], ['医药保健', 'WQ1987'], ['宠物生活', 'WQ1994'], ['礼品鲜花', 'WQ1993'], ['农资绿植', 'WQ1998'], ['生活旅行', 'WQ1995'], ['奢侈品', 'WQ1970'], ['京东国际', 'WQ1971'], ['艺术邮币', 'WQ1997'], ['二手商品', 'WQ2002'], ['特产馆', 'WQ1999'], ['京东金融', 'WQ2000'], ['国际名牌', 'WQ1969'], ['拍卖', 'WQ2001'], ['房产', 'WQ2008'], ['工业品', 'WQ2102']];

const data = a.map((_val) => ({
  text: _val[0],
  cid: _val[1],
}));

const CategoryListNavUi = (props) => {
  useEffect(() => {
  console.log('foot', 'test')
    props.history.push('categorylist/WQ2006')
    const itemlist = document.getElementsByTagName('a');
    const wrapperdom = document.getElementById('wrapper')
    for (let i = 0; i < itemlist.length; i += 1) {
      itemlist[i].style.color = 'rgba(0,0,0,1)';
      itemlist[i].style.background = 'rgba(239,255,239,.4)';
    }
    itemlist[0].style.color = '#ff5b05'
    itemlist[0].style.background = 'rgba(255,255,255,1)';
  }, [])
  useEffect(() => {
    const mylistdom = document.getElementById('mylist')
    const wrapperdom = document.getElementById('wrapper')
    const mySwiper = new Swiper('.swiper-container', {
      setWrapperSize: true,
      slidesPerView: '39',
      direction: 'vertical',
      height:46,
      resistance:true,
      touchEventsTarget:'container',
    })
    let y0; let y1;
    wrapperdom.addEventListener('touchstart', (e) => {
        // const touch = e.touches[0]; // 获取第一个触点
        // y0 = Number(touch.pageY);
    }, { passive:false });
    wrapperdom.addEventListener('touchmove', (e) => {
        // const touch = e.touches[0]; // 获取第一个触点
        // y1 = Number(touch.pageY);
        const distancewwrapper = parseInt(window.getComputedStyle(wrapperdom).transform.split(',')[5], 10)
        // console.log('distancewwrapper', distancewwrapper)
        if (distancewwrapper >= 100 || distancewwrapper <= -1206) {
           // wrapperdom.classList.add('touchstop')
        }
    }, { passive:false });
    wrapperdom.addEventListener('touchend', (e) => {
        const distancewwrapper = parseInt(window.getComputedStyle(wrapperdom).transform.split(',')[5], 10)
        if (distancewwrapper >= 0) {
          // mylistdom.style.transform = "translateY(0px)"
          wrapperdom.style.transform = "translateY(0px)"
        } else if (distancewwrapper <= -1196) {
          // mylistdom.style.transform = "translateY(0px)"
          wrapperdom.style.transform = "translateY(-1196px)"
        }
    }, { passive:false });
  })
  const handleClick = (e, item, index) => { /*since Swiper use wrapperdom to translate,so adjust it.*/
    // e.stopPropagation();
     /* 被点击item的字体颜色 背景变化 */
    const itemlist = document.getElementsByTagName('li');
    for (let i = 0; i < itemlist.length; i += 1) {
      itemlist[i].style.color = 'rgba(0,0,0,1)';
      itemlist[i].style.background = 'rgba(239,255,239,.4)';
    }
    e.target.style.color = '#ff5b05'
    e.target.style.background = '#fff'
    const wrapperdom = document.getElementById('wrapper')
    const itemdom = document.getElementById(`${item.cid}`);
    // e.target.classList.add(listyle.styles)
    /* 被点击的整个导航栏的向上移动逻辑 */
    // 需要移动的整个itemlist dom
    // 当前点击item的dom
    // 最后一个item 的 dom
    // const lastitemdom = document.getElementById(`${data[data.length - 1].cid}`);
    // 页面部分最最低处元素的 dom
    const footwrapdom = document.getElementById('footwrap');
    // 当前被点击元素距离的offsetTop
    const itemdomoffset = itemdom.offsetTop;
    // 页面部分最最低处元素的 offsetTop（可以理解为itemlist在页面所能显示的高度）
    const footwrapdomoffset = footwrapdom.offsetTop;
    // 需要移动的整个itemlist height
    const wrapperdomheight = parseInt(window.getComputedStyle(wrapperdom).height, 10);
    // 当前（即每一个item）Height
    const itemdomheight = parseInt(window.getComputedStyle(itemdom).height, 10);
    // 所有item的数量
    const itemNum = wrapperdomheight / itemdomheight;
    // 当前页面itemlist需要显示的个数
    const itemNuminpage = Math.floor(footwrapdomoffset / itemdomheight);
    // 能够点击向上移动的最后一个元素item的 index
    const lastItemIndex = itemNum - 1 - itemNuminpage;
    // 如果被点击的元素的index是在lastItemIndex之前的，移动距离就是这个元素的offsetTop
    // 如果是在此之后的就是最大位移距离 mylistdomheight -itemNuminpage*itemdomheight
    if (index < lastItemIndex) {
      wrapperdom.style.transform = `translateY(-${itemdomoffset}px)`;
      wrapperdom.style.transition = 'all 1 ease-in';
    } else {
      wrapperdom.style.transform = `translateY(-${wrapperdomheight - itemNuminpage * itemdomheight}px)`;
      wrapperdom.style.transition = 'all 1 ease-in';
    }
  }

  return (
    <div
      className="swiper-container"
      id="mylist"
    >
      <ul className="swiper-wrapper" id="wrapper">
        {data.map((item, index) => (
            <li
              className="swiper-slide"
              id={item.cid}
              onClick={(e) => { handleClick(e, item, index) }}
              css={[listyle]}
              key={Math.random()}
            >
              <NavLink to={`/categorylist/${item.cid}`} activeClassName="active">
                 {item.text}
              </NavLink>
            </li>
      ))}
      </ul>
    </div>
  );
};

export default withRouter(CategoryListNavUi);
