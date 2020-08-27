import React, { PureComponent, Fragment } from 'react';
import { jsx, css } from '@emotion/core'
import { withRouter } from 'react-router-dom';

const LazySearchHeaderUi = React.lazy(() => import('@/publicui/searchheader'))
const LazySortBarUi = React.lazy(() => import('@/publicui/sortbar'))
const LazySelectionUi = React.lazy(() => import('@/pages/productionlist/productionitem'))
const LazySortViewUi = React.lazy(() => import('@/publicui/sortview'))

@withRouter
class ProductionList extends PureComponent {
  render() {
    return (
      <>
        <LazySearchHeaderUi pathinfo={this.props.match} />
        <LazySortBarUi />
        <LazySortViewUi />
        <LazySelectionUi />

      </>
    );
  }
}

export default ProductionList;
