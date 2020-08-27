import React, { PureComponent, Fragment, Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import groutes from '@/route';
import ErrorBoundary from '@/publicui/errorBoundary';

const LazyHome = React.lazy(() => import('@/pages/home'));
const LazyCategorylist = React.lazy(() => import(/* webpackChunckName:"categorylist" */'@/pages/categorylist'));
const LazyCategoryBodyUi = React.lazy(() => import(/* webpackChunckName:"CategoryBodyUi" */'@/pages/categorylist/categorybody/categorybodyui'));
const LazyCartUnlogin = React.lazy(() => import(/* webpackChunckName:"cartunlogin" */'@/pages/cartunlogin'));
const LazyCartLogined = React.lazy(() => import(/* webpackChunckName:"cartlogined" */'@/pages/cartlogined'));
const LazyProductionList = React.lazy(() => import(/* webpackChunckName:"productionlist" */'@/pages/productionlist'));
const LazyProductionInfo = React.lazy(() => import(/* webpackChunckName:"productioninfo" */'@/pages/productioninfo'));
const LazyLogin = React.lazy(() => import('@/pages/login'));
const LazyLogin2 = React.lazy(() => import('@/pages/login2'));
const LazyNotFound = React.lazy(() => import('@/pages/notfound'));
const LazyHooksexample = React.lazy(() => import(/* webpackChunckName:"hooksexample" */'@/pages/hooksexample'));
const Test = React.lazy(() => import(/* webpackChunckName:"hooksexample" */'@/test'));

class App extends PureComponent {
  // constructor(props) {
  // 	super(props);
  // 	this.state = {hasError:false};
  // }

  // static getDerivedStateFromError(error) {
  // 	return { isError: true };
  // }

  // componentDidCatch(error, info) {
  // 	// this.setState({ hasError: true });
  // 	console.log(error,info)
  // }

  render() {
    // if (this.state.isError) {
	 //        return (<div>error</div>)
	 //    }

    return (
    // <Provider store={store}>
      <BrowserRouter>
        <>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              {renderRoutes(groutes)}
            </Suspense>
          </ErrorBoundary>
        </>
      </BrowserRouter>
    // </Provider>
    );
  }
}
export default App;
