import React, { PureComponent, Suspense } from 'react';
// import { jsx, css } from '@emotion/core';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import storeinfo from '@/store';
import ErrorBoundary from '@/publicui/errorBoundary';
import LoadingshowUi from '@/publicui/loadingshow';

const LazyHome = React.lazy(() => import('@/pages/home'));
const LazyCategorylist = React.lazy(() => import(/* webpackChunckName:"categorylist" */'@/pages/categorylist'));
const LazyCartUnlogin = React.lazy(() => import(/* webpackChunckName:"cartunlogin" */'@/pages/cartunlogin'));
const LazyCartLogined = React.lazy(() => import(/* webpackChunckName:"cartlogined" */'@/pages/cartlogined'));
const LazyProductionList = React.lazy(() => import(/* webpackChunckName:"productionlist" */'@/pages/productionlist'));
const LazyProductionInfo = React.lazy(() => import(/* webpackChunckName:"productioninfo" */'@/pages/productioninfo'));
const LazyLogin = React.lazy(() => import('@/pages/login'));
const LazyLogin2 = React.lazy(() => import('@/pages/login2'));
const LazyNotFound = React.lazy(() => import('@/pages/notfound'));
// const LazyHooksexample = React.lazy(() => import(/* webpackChunckName:"hooksexample" */'@/pages/hooksexample'));
const LazyMyinfo = React.lazy(() => import(/* webpackChunckName:"myinfo" */'@/pages/myinfo'));
const Test = React.lazy(() => import(/* webpackChunckName:"test" */'@/test'));

class App extends PureComponent {
  render() {
    return (
      <Provider store={storeinfo.store}>
        <PersistGate persistor={storeinfo.persistor}>
          <BrowserRouter>
            <ErrorBoundary>
              <Suspense fallback={<LoadingshowUi />}>
                <Switch>
                  <Route path="/home" exact component={LazyHome} />
                  <Route path="/categorylist" component={LazyCategorylist} />
                  <Route path="/login2" exact component={LazyLogin} />
                  <Route path="/login" exact component={LazyLogin2} />
                  <Route path="/myinfo/:userid" component={LazyMyinfo} />
                  <Route path="/cartunlogin" exact component={LazyCartUnlogin} />
                  <Route path="/cartlogined/:userid" component={LazyCartLogined} />
                  <Route path="/productionlist/:productcategory" component={LazyProductionList} />
                  <Route path="/productioninfo/:category/:sku" component={LazyProductionInfo} />
                  <Route path="/test" exact component={Test} />
                  <Redirect to="/home" />
                  <Route path="*" exact component={LazyNotFound} />
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
