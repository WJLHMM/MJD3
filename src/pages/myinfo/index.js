import React, { useEffect, Suspense } from 'react';
import { withRouter } from 'react-router-dom';

import styles from '@/pages/myinfo/myinfo.scss';

const LazyHeaderUi = React.lazy(() => import('@/publicui/header'));
const LazyMyinfocardUi = React.lazy(() => import('@/pages/myinfo/myinfocard'));
const LazyMyinfoPurchasingUi = React.lazy(() => import('@/pages/myinfo/myinfopurchasing'));

const MyinfoUi = (props) => (
  <div className={styles.myinfowrap}>
    <Suspense fallback={<div>Loading.....</div>}>
      <LazyHeaderUi />
      <LazyMyinfocardUi />
      <LazyMyinfoPurchasingUi />
      <LazyMyinfoPurchasingUi />
      <LazyMyinfoPurchasingUi />
      <LazyMyinfoPurchasingUi />
    </Suspense>
  </div>
);

export default withRouter(MyinfoUi);
