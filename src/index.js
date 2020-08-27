// import 'core-js/es'
// import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable';// IE10兼容必须
import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/App';
import '@/statics/style.css';
import '@/statics/iconfont/iconfont.css';
import '@/statics/setantdmobilestyle.css';

ReactDOM.render(<App />, document.getElementById('root'));
