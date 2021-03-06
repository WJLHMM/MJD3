/** @jsx jsx */

import React, {
  Fragment, useState, useEffect, useMemo, useRef,
} from 'react';
import { withRouter } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import { List, Grid } from 'antd-mobile';
import LazyLoad from 'react-lazyload';
import CategoryListHeader from '@/pages/categorylist/categorybody/categorylistheader';

const { Item } = List;

let data;

const CategoryBodyUi = (props) => {
  const { cid } = props.match.params;
  const b1 = {
    WQR2006: [
      ['https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg',
        '空调'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg',
        '冰箱'],
      ['https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png',
        '电脑'],
      ['https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
        '手机'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg',
        '全面屏手机'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg',
        '游戏手机'],
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t1/134182/23/366/16758/5eccb3caE2b8d0c6d/7ab40f9d9441a2a5.jpg',
        '保健品'],
      ['https://img14.360buyimg.com/focus/s140x140_jfs/t1/114862/21/8081/13361/5ecb398fEc7c98869/4b4101d0acbf4ced.jpg',
        '口罩'],
      ['https://img13.360buyimg.com/focus/s140x140_jfs/t1/136893/38/305/31308/5ecb84dcE410bc59a/36568e70a84f8807.jpg',
        '驱蚊用品'],
      ['https://img13.360buyimg.com/focus/s140x140_jfs/t1/120301/21/3027/11815/5ecb80a8Ed94ec15d/c20f3541c5618e17.jpg',
        '电磁炉'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t1/111738/8/8168/9785/5ecb40ccE19924aec/1a1a91827d0f07ba.jpg',
        '电热水壶'],
      ['https://img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg',
        '数据线'],
      ['https://img14.360buyimg.com/focus/s140x140_jfs/t1/131006/3/360/19831/5eccb047E2e95a92e/b425dc4923a20c15.jpg',
        '图书'],
      ['https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg',
        '美妆护肤'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t1/104017/10/11956/27906/5e3e8936E54437217/e5905d3b63d5f6fb.jpg',
        '除菌液'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t1/129461/33/2827/16392/5ecb3dd2E2d178436/c4cd36d661e91665.jpg',
        '休闲零食'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t1/106781/8/11928/23561/5e3e833fE92c281f5/72b834ead18b6462.jpg',
        '充电宝'],
      ['https://img12.360buyimg.com/focus/s140x140_jfs/t1/96627/6/11719/15770/5e3e83b6E05b80eea/76b39555bc2d2a89.jpg',
        '体温计'],
      ['https://img11.360buyimg.com/focus/s140x140_jfs/t1/97873/26/11984/16170/5e3e878eE3d6f29d8/820c61d6be7faf12.jpg',
        '投影机'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg',
        '游戏机'],
    ],
    WQ1980: [
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
        '小米'],
      ['https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
        '华为'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
        '荣耀'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
        'iPhone'],
      ['https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
        'vivo'],
      ['https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
        'OPPO'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg',
        '魅族'],
      ['https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png',
        '三星'],
      ['https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg',
        '一加'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t13096/309/908035611/5138/5558f001/5a16924fNeac7677e.jpg',
        '360手机'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t1/84715/12/13703/4118/5e5f0dacE08741f12/63fb9e75fbaf0738.jpg',
        '锤子手机'],
      ['https://img11.360buyimg.com/focus/s140x140_jfs/t1/108301/34/7712/3254/5e5f0de9E4ca2f4b5/c664966ee1d36d47.jpg',
        '努比亚'],
      ['https://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
        '老人机'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg',
        '手机'],
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg',
        '全面屏手机'],
      ['https://img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg',
        '游戏手机'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg',
        '拍照手机'],
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t13255/192/958298391/1687/5c7e3c53/5a169204Nd4aa27bb.jpg',
        '对讲机'],
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t13246/188/925975876/8794/686dbb9c/5a1691e0N62f626e3.jpg',
        '京东回收'],
      ['https://img13.360buyimg.com/focus/s140x140_jfs/t1/109596/11/7650/2742/5e5f1074E76a2364e/09b2b19f13691c60.jpg',
        '女性手机'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t11644/236/2358207967/6141/e2d71825/5a169205N84a49a6a.jpg',
        '京东维修'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '合约机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '选号卡'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '办套餐'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '京东网厅'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '数据线'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手机储存卡'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '充电宝'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手机贴膜'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手机耳机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '蓝牙耳机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手机支架'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手机饰品'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '车载配件'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '充电器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手机电池'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '创意配件'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '拍照配件'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '苹果周边'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手机壳/保护套'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '无线充电器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '背夹充电宝'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手机转接'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '单反相机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '数码相机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '拍立得'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '户外器材'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '单电/微单相机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '摄像机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '运动相机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '镜头'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '冲印服务'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '便携/无线音箱'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '音箱/音响'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        'MP3/MP4'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '耳机/耳麦'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '麦克风'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '专业音频'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '存储卡'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '三脚架/云台'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '数码支架'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '读卡器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '滤镜'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '相机清洁/贴膜'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '相机包'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '闪光灯/手柄'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '电池/充电器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '智能手环'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '智能手表'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '智能家居'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '智能机器人'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '体感车'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '无人机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '其他配件'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        'VR眼镜'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '智能配饰'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '学生平板'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '电纸书'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '录音笔'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '早教益智'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '点读机/笔'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '复读机'],
    ],
    WQ1981: [
      ['https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
        '轻薄本'],
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png',
        '游戏本'],
      ['https://img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg',
        '机械键盘'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg',
        '组装电脑'],
      ['https://img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg',
        '移动硬盘'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg',
        '显卡'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg',
        '游戏台式机'],
      ['https://img13.360buyimg.com/focus/s140x140_jfs/t12526/166/988611883/3419/3c7507ac/5a17ba5dN8f6ffa5e.jpg',
        '家用打印机'],
      ['https://img14.360buyimg.com/focus/s140x140_jfs/t1/98581/29/13884/5125/5e5f1d66E8357cf2e/7232090502f87411.jpg',
        '吃鸡装备'],
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg',
        '曲屏显示器'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t13492/261/938265048/5840/b5e4bdb6/5a17ba61N61a74bc3.jpg',
        '投影机'],
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t1/97514/11/13831/2863/5e5f1d77Ee5ab96e7/70294c751c6ce6f5.jpg',
        '日本文具'],
      ['https://img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg',
        '笔记本'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg',
        '平板电脑'],
      ['https://img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg',
        '一体机'],
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg',
        '台式机'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t12088/219/967281794/2015/c05e448c/5a17b933N825c264a.jpg',
        '笔记本配件'],
      ['https://img20.360buyimg.com/focus/s140x140_jfs/t12901/167/947504038/6315/4c239386/5a17b948Nf6918c9e.jpg',
        '游戏台式机'],
      ['https://img10.360buyimg.com/focus/s140x140_jfs/t13138/231/1001350583/7486/6d001868/5a17b94eN820f6506.jpg',
        '商用台式机'],
      ['https://img30.360buyimg.com/focus/s140x140_jfs/t12418/24/1008907015/2867/86eb55a/5a17b971N14214c4f.jpg',
        '游戏本'],
      ['https://img12.360buyimg.com/focus/s140x140_jfs/t13504/44/947654756/2419/ca768bc2/5a17b8dcNd0418625.jpg',
        '平板电脑配件'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '轻薄本'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '二合一平板'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '服务器/工作站'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '鼠标'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        'U盘'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '键盘'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '鼠标垫'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '移动硬盘'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手写板'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '硬盘盒'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '线缆'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手机U盘'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '电脑清洁'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '插座'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '键鼠套装'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        'UPS电源'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '电脑工具'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '机械键盘'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '摄像头'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '网络仪表仪器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '网络存储'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '显示器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '硬盘'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '电源'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '内存'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        'CPU'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '机箱'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '散热器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '刻录机/光驱'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '组装电脑'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '曲面屏显示器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '声卡/扩展卡'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '装机配件'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '路由器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '网卡'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '网络配件'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '4G/3G上网'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '网络盒子'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '交换机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '安防监控'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '多功能一体机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '打印机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '投影机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '验钞/点钞机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '投影配件'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '家用打印机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '传真设备'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '扫描设备'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '装订/封装机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '考勤机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '会议音频视频'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '保险柜'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '碎纸机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '收银机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '白板'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '办公家具'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '复合机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '纸类'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '笔类'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '墨盒'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '计算器'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '办公文具'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '学生文具'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '硒鼓/墨粉'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '色带'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '文件管理'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '财会用品'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '激光笔'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '画具画材'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '游戏耳机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '游戏机'],
      ['https://st.360buyimg.com/so/images/category/categorydef.png',
        '手柄/方向盘'],
    ],
  };
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  if (b1[cid]) {
    data = b1[cid].map((_val, i) => ({
      icon: _val[0],
      text: _val[1],
    }));
  } else {
    data = []
  }
  if (data.length === 0) {
     return  (
      <>
        <CategoryListHeader />
        <div style={{
           top:'300px',
           left:'140px',
           color:'red',
           position:'absolute',
           textAlign:'center',
           height:'40px',
           lineHeight:'20px',
          }}
        >
          除前三项,其他数据正在建设中，敬请期待
        </div>
      </>
    )
  }
  return (
      <>
        <CategoryListHeader />
        <Grid
          data={data}
          columnNum={3}
          hasLine={false}
          renderItem={(dataItem) => (
            <div
              id={dataItem.text}
              style={{ padding: '0px 2rem 0px 0px', width: '100%', height: '100%' }}
              onClick={() => {
                props.history.push(`/productionlist/${dataItem.text}`);
              }}
            >
              <img src={dataItem.icon} style={{ width: '60%', height: '56%' }} alt="" />
              <p style={{
                height: '40%', fontSize: '14px', textAlign: 'center', paddingTop: '10px', color: '#333',
              }}
              >
                {dataItem.text}
              </p>
            </div>
          )}
        />
      </>
  );
};

export default withRouter(CategoryBodyUi);
