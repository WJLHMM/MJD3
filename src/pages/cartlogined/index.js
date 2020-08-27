/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'

const LazyHeaderUi = React.lazy(() => import('@/publicui/header'))
const LazyAddressBarUi = React.lazy(() => import('@/pages/cartlogined/addressbar'))
const LazySelectionUi = React.lazy(() => import('@/pages/cartlogined/selection'))
const LazyRecommendadvUi = React.lazy(() => import('@/pages/home/recommendadv'))
const LazySettlementBarUi = React.lazy(() => import('@/pages/cartlogined/settlementbar'))
const LazyTabBarUi = React.lazy(() => import('@/publicui/footer'))

@withRouter
class CartLogined extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div
        className="cartloginedwrap"
        css={css`
          width:100%;
          max-width:1080px;
          position:relative;
          margin:0 auto;
        `}

      >
        <LazyHeaderUi />
        <LazyAddressBarUi />
        <LazySelectionUi />
        <LazyRecommendadvUi />
        <LazySettlementBarUi />
        <LazyTabBarUi />
      </div>
    );
  }
}

export default CartLogined;
