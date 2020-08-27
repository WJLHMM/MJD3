import React, { PureComponent, Fragment, Suspense } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
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

const Generalroute = [
  {
    	path: '/',
    	redirect: LazyHome,
  },
  {
    	path: '/home',
    	component: LazyHome,
    exact: true,
  },
  {
    path: '/categorylist',
    component: LazyCategorylist,
    children: [
      { path: '', redirect: '0/WQR2006' },
		   { path: ':paramsid/:cid', component: LazyCategoryBodyUi },
    ],
  },
  {
    	path: '/login',
    	component: LazyLogin,
    exact: true,
  },
  {
    	path: '/login2',
    	component: LazyLogin2,
    exact: true,
  },
  {
    	path: '/cartunlogin',
    	component: LazyCartUnlogin,
    exact: true,
  },
  {
    	path: '/cartlogined',
    	component: LazyCartLogined,
    exact: true,
  },
  {
    	path: '/productionlist',
    	component: LazyProductionList,
    exact: true,
  },
  {
    	path: '/productioninfo',
    	component: LazyProductionInfo,
    exact: true,
  },
  {
    	path: '/test',
    	component: Test,
    exact: true,
  },
  {
    	path: '*',
    	component: LazyNotFound,
    exact: true,
  },

];

export default Generalroute;
