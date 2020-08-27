/** @jsx jsx */
import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import {
  withRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { jsx, css } from '@emotion/core'

import {
  CategorybodyWrap,
  CategoryListWrap,
  CategoryListHeader,
} from '@/pages/categorylist/categorybody/categorybody';

import CategoryListNavUi from '@/pages/categorylist/categorybody/categorylistnavui';

import CategoryBodyUi from '@/pages/categorylist/categorybody/categorybodyui'

const LazySearchHeaderUi = React.lazy(() => import(/* webpackChunckName:"header" */'@/publicui/searchheader'));
const LazyTabBarUi = React.lazy(() => import(/* webpackChunckName:"footer" */'@/publicui/footer'));

@withRouter
class Categorylist extends PureComponent {
  componentDidMount() {
    document.body.addEventListener('touchmove', (e) => {
      e.preventDefault();
      return false;
    }, { passive: false })
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    document.body.removeEventListener('touchmove', (e) => {
      e.preventDefault();
      return false;
    }, { passive: false })
    document.body.style.overflow = 'auto'
  }

  render() {
    return (
      <div
        css={css`
          width:100%;
          max-width:1080px;
          color:#666;
          height:100%;
          margin:0 auto;
          background:#fff;
        `}
      >
        <LazySearchHeaderUi />
        <CategorybodyWrap>
          <CategoryListNavUi />
          <CategoryListWrap>
            <CategoryListHeader />
            <Switch>
              <Route path="/categorylist/:cid" exact component={CategoryBodyUi} />
              <Redirect to="/categorylist/WQR2006" />
              <Route path="*" exact render={() => (<div style={{ position: 'absolute', top: '100px', left: '150px' }}>数据正在建设中，敬请期待！</div>)} />
            </Switch>
          </CategoryListWrap>
        </CategorybodyWrap>
        <LazyTabBarUi />
      </div>
    )
  }
}

export default Categorylist
