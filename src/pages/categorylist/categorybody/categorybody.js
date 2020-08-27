/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/core';
import { List } from 'antd-mobile';
import LazyLoad from 'react-lazyload';

import {
  categorybodywrapstyle,
  categorylistwrapstyle,
  categorylistheaderstyle,

} from '@/pages/categorylist/categorybody/categorybodystyle';

// const { Item } = List;

export const CategorybodyWrap = (props) => (
  <div
    className="categorybodywrap"
    css={categorybodywrapstyle}
    {...props}
  />
);

export const CategoryListWrap = (props) => (
  <div
    className="categorylistwrap"
    css={categorylistwrapstyle}
    {...props}
  />
);

export const CategoryListHeader = () => (
  <div
    className="categorylistheader"
    css={categorylistheaderstyle}
  >
    <h3>热门推荐</h3>
    <div className="ranklist">
      <i className="iconfont icon-paihangbang">&#xe707;</i>
      <span>排行榜</span>
      <i className="iconfont icon-arrow-right">&#xe601;</i>
    </div>
  </div>
);
