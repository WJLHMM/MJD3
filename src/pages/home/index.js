/** @jsx jsx */
import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import { PageBgColor } from '@/statics/flexlayout';
import CancelButton from '@/pages/home/mcommontip/cancelbutton'

const LazyMCommonTip = React.lazy(() => import('@/pages/home/mcommontip'))
const LazySearch = React.lazy(() => import('@/pages/home/search'))
const LazySidebgTag = React.lazy(() => import('@/pages/home/sidebg'))
const LazyTabBarUi = React.lazy(() => import('@/publicui/footer'))
const LazyCarouselUi = React.lazy(() => import('@/pages/home/carousel'))
const LazyGridUi = React.lazy(() => import('@/pages/home/gridui'))
const LazySecondkillUi = React.lazy(() => import('@/pages/home/secondkill'))
const LazyAdvlinkTag = React.lazy(() => import('@/pages/home/advlinktag1'))
const LazyAdvlinkTag2 = React.lazy(() => import('@/pages/home/advlinktag2'))
const LazyAdvlinkTag3 = React.lazy(() => import('@/pages/home/advlinktag3'))
const LazyDjxyadvUi = React.lazy(() => import('@/pages/home/djxyadv'))
const LazyDailyshopUi = React.lazy(() => import('@/pages/home/dailyshop'))
const LazyRecommendadvUi = React.lazy(() => import('@/pages/home/recommendadv'))

@withRouter
class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
    }
  }

  render() {
    return (
      <div
        id="homewrap"
        css={css`
					width:100%;
					max-width:1080px;
			        color:#666;
					height:auto;
					position:relative;
					margin:0 auto;
					overflow:hidden;
					backgroundColor:${PageBgColor}
			  `}
      >
        <LazyMCommonTip />
        <LazySidebgTag />
        <LazySearch />
        <LazyCarouselUi />
        <LazyGridUi />
        <LazySecondkillUi />
        <LazyAdvlinkTag />
        <LazyAdvlinkTag2 />
        <LazyAdvlinkTag3 />
        <LazyDjxyadvUi />
        <LazyDailyshopUi />
        <LazyRecommendadvUi clientHeight={this.state.clientHeight} />
        <LazyTabBarUi />
      </div>
    )
  }
}

export default Home
