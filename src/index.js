// import 'core-js/es'
// import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable';// IE10兼容必须
import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/App';
import '@/statics/style.css';
import '@/statics/iconfont/iconfont.css';
import 'swiper/swiper-bundle.css';
import '@/statics/setantdmobilestyle.css';

/*PWA setup*/
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('service-worker registed')
        }).catch((error) => {
            console.log('service-worker register error')
        })
    })
}

ReactDOM.render(<App />, document.getElementById('root'));
