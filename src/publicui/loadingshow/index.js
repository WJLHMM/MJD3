import React, { useEffect } from 'react';
import { Toast } from 'antd-mobile';

const LoadingshowUi = () => {
  // const loadingToast = () => {
  //   Toast.loading('Loading...', 1, () => {
  //     console.log('Load complete !!!');
  //   });
  // };

  useEffect(() => {
    Toast.loading('Loading...', 30, () => {
      // console.log('Load complete !!!');
    });

    setTimeout(() => {
      Toast.hide();
    }, 300);
  });
  return (
    <div />
  );
};

export default LoadingshowUi;
