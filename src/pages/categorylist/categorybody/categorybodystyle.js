/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import {
  flexlayout,
  flexlayoutV,
  flexlayoutAlignCenter,
  flexlayoutPackJustify,
  flexlayoutFlexStart,
  flexlayout1,
  flexlayoutPackAround,
  PageBgColor,

} from '@/statics/flexlayout';

export const categorybodywrapstyle = css`
  width:100%;
  height:100%;
  margin-top:44px;
  ${flexlayout};
  ${flexlayoutPackJustify};  
`;
export const categorylistwrapstyle = css`
  ${flexlayout};
  ${flexlayoutV};
  ${flexlayout1};
  ${flexlayoutFlexStart};  
  ${flexlayoutPackJustify};  
`;
export const categorylistheaderstyle = css`
  ${flexlayout};
  ${flexlayoutAlignCenter};
  ${flexlayoutPackJustify};  
  height:46px;
  width:100%;
  padding:0px 1rem;
  color:#000;
  h3 {
    font-size:0.92rem;
    font-weight:bold;
  }
  .ranklist {
    .icon-paihangbang {
      color:red;
      font-size:0.7rem;
    }
    span {
      font-size:0.5rem;
      color:#848689;
    }
  }
`;
