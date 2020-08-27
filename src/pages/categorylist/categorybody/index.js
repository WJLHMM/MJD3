/** @jsx jsx */

import React, { PureComponent } from 'react';
import {
  withRouter, Route, Switch, Redirect,
} from "react-router-dom";
import { jsx, css } from '@emotion/core'

import {
  CategorybodyWrap,
  CategoryListWrap,
  CategoryListHeader,
} from '@/pages/categorylist/categorybody/categorybody';

import CategoryListNavUi from '@/pages/categorylist/categorybody/categorylistnavui';
// import CategoryBodyUi from '@/pages/categorylist/categorybody/categorybodyui';
const LazyCategoryBodyUi = React.lazy(() => import(/* webpackChunckName:"CategoryBodyUi" */'@/pages/categorylist/categorybody/categorybodyui'))

@withRouter
class Categorybody extends PureComponent {
  render() {
    return (
      <CategorybodyWrap>
        <CategoryListNavUi />
        <CategoryListWrap>
          <CategoryListHeader />
          <Switch>
            <Route path="/categorylist/:cid" component={LazyCategoryBodyUi} />
            <Redirect to="/categorylist/WQR2006" />
          </Switch>
        </CategoryListWrap>
      </CategorybodyWrap>
    )
  }
}

export default Categorybody
