import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import styles from '@/pages/productioninfo/style.scss'
import SplitLineUi from '@/publicui/splitline'

const LazyImgHeaderUi = React.lazy(() => import(/* webpackChunkName:"hearder" */'@/publicui/header'))
const LazyImgShowViewUi = React.lazy(() => import(/* webpackChunkName:"imgview" */'@/pages/productioninfo/imgview'))
const LazyBuyInfoUi = React.lazy(() => import(/* webpackChunkName:"buyinfo" */'@/pages/productioninfo/buyinfo'))
const LazyDiscountUi = React.lazy(() => import(/* webpackChunkName:"discount" */'@/pages/productioninfo/discount'))
const LazyDiscountUi2 = React.lazy(() => import(/* webpackChunkName:"discount2" */'@/pages/productioninfo/discount2'))
const LazyDiscountUi3 = React.lazy(() => import(/* webpackChunkName:"discount3" */'@/pages/productioninfo/discount3'))
const LazyDiscountUi4 = React.lazy(() => import(/* webpackChunkName:"discount4" */'@/pages/productioninfo/discount4'))
const LazyDiscountUi5 = React.lazy(() => import(/* webpackChunkName:"discount5" */'@/pages/productioninfo/discount5'))
const LazyCommentUi = React.lazy(() => import(/* webpackChunkName:"comment" */'@/pages/productioninfo/comment'))
const LazyCommentlistUi = React.lazy(() => import(/* webpackChunkName:"commentlist" */'@/pages/productioninfo/commentlist'))
const LazySelectedBar = React.lazy(() => import(/* webpackChunkName:"selectedbar" */'@/pages/productioninfo/selectedbar'))
const LazyQABarUi = React.lazy(() => import(/* webpackChunkName:"qabar" */'@/pages/productioninfo/qabar'))
const LazySellerInfoUi = React.lazy(() => import(/* webpackChunkName:"sellerinfo" */'@/pages/productioninfo/sellerinfo'))

@withRouter
class ProductionInfo extends PureComponent {
  constructor() {
    super()
    this.state = {
      /* 务必要设置一个非空值，否则第一次点击路由正常显示页面，第二次会报错，需要刷新再显示 */
      imgview: ["https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/114769/9/12319/168411/5f0d1126Eb45debdc/a934fa6127e62a5b.jpg!q80.dpg"],
      price: [1849],
      productiondetail: ["科龙(Kelon) 京品家电 1.5匹 风骑士 一级能效 智能控制 变频冷暖 静音 壁挂式空调挂机 KFR-35GW/FA1-A1"],
      itemdetail: ["【科龙优惠购】今日抢购价不高于1849！【一级变频】手机智控，18点关注直播间张继科京东直播首秀，更有大额优惠券！详戳"],
      discount: [
        ["满1980减100"],
        ["赠品", "登比 空调挡风板 防直吹遮风导风板出口风挡板月子防风板冷风导风板罩 1-2匹通用 X1"],
        ["满额返券", "买空调品类满500元返电视&amp;冰洗冷品类东券，额度满1500减100"],
      ],
      selected: [
        { production: "1.5匹，【风骑士一级智能空调】，1个" },
        { service: "本商品支持保障服务、京东服务+，点击可选服务" },
      ],
      delivery: ["北京天安门广场000号"],
      weight: ["不计重量"],
      deliveryservice: ["99元免基础运费", "京东发货&商家售后", "7天无理由退货（安装后不支持）", "预约送货", "本地仓"],
      comment: [
        { commentnum: "3万+" },
        { goodcomrate: "99%" },
        { commentuiwrap: ["送货安装(3904)", "节能环保(1917)", "简洁大方(794)", "冷热两用(775)", "美观大气(466)", "噪音很小(230)", "外观漂亮(173)", "反应迅速(109)", "方便省事(106)", "使用舒适(78)", "风大马力足(38)", "方便快捷(10)", "省时便捷(10)"] },

      ],
      sellerinfo: [
        { sellerimg: "https://img13.360buyimg.com/cms/jfs/t29203/140/1200329173/126480/7f83faef/5ce36e72N476c39bd.gif" },
        { sellername: "科龙空调京东自营旗舰店" },
        { isSelfsell: "京东自营" },
        { fansnum: "353万" },
        { goodsnum: "28" },

      ],
      sku: '12368216',
    }
  }

  componentDidMount() {
    const mockdata = [
      {
        空调: [
          {
            sku: ["10002787741"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/114769/9/12319/168411/5f0d1126Eb45debdc/a934fa6127e62a5b.jpg!q80.dpg",
              "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/103334/30/16856/441061/5e82bef5Ed0f9c83f/4d86dbbb63e4dcd9.jpg!q70.dpg",
              "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/98415/27/16976/455841/5e831ce0Ec3828926/970784674d5a86f6.jpg!q70.dpg",
              "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/85177/34/16429/486604/5e7b0260E3b135485/a168134e2a16ae7e.jpg!q70.dpg",
              "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/104471/36/17522/235040/5e888f98E8213ac24/c066a42e35b888f5.jpg!q70.dpg",
              "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/96927/3/15719/331420/5e7348a0E7e29f226/8c0bd6e4815a1ae0.jpg!q70.dpg",
              "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/85684/27/15624/482200/5e7348dbE0f6c8658/26a02a48d10609d9.jpg!q70.dpg",
              "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/95076/16/15674/136094/5e7348b7Ee24ebe26/500c1d51333c46ef.jpg!q70.dpg",
              "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/75709/31/13223/132107/5da92d90E4186b4c5/4fb8d9104d80dd8a.jpg!q70.dpg",
              "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/90065/16/15336/441866/5e6f4ec4Ebb84a1ff/3999f3ad91f4cfc3.jpg!q70.dpg",
            ],
            price: ["1849"],
            productiondetail: ["科龙(Kelon) 京品家电 1.5匹 风骑士 一级能效 智能控制 变频冷暖 静音 壁挂式空调挂机 KFR-35GW/FA1-A1"],
            itemdetail: ["【科龙优惠购】今日抢购价不高于1849！【一级变频】手机智控，18点关注直播间张继科京东直播首秀，更有大额优惠券！详戳"],
            discount: [
              ["满1980减100"],
              ["赠品", "登比 空调挡风板 防直吹遮风导风板出口风挡板月子防风板冷风导风板罩 1-2匹通用 X1"],
              ["满额返券", "买空调品类满500元返电视&amp;冰洗冷品类东券，额度满1500减100"],
            ],
            selected: [
              { production: "1.5匹，【风骑士一级智能空调】，1个" },
              { service: "本商品支持保障服务、京东服务+，点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费", "京东发货&商家售后", "7天无理由退货（安装后不支持）", "预约送货", "本地仓"],
            comment: [
              { commentnum: "3万+" },
              { goodcomrate: "99%" },
              { commentuiwrap: ["送货安装(3904)", "节能环保(1917)", "简洁大方(794)", "冷热两用(775)", "美观大气(466)", "噪音很小(230)", "外观漂亮(173)", "反应迅速(109)", "方便省事(106)", "使用舒适(78)", "风大马力足(38)", "方便快捷(10)", "省时便捷(10)"] },

            ],
            sellerinfo: [
              { sellerimg: "https://img13.360buyimg.com/cms/jfs/t29203/140/1200329173/126480/7f83faef/5ce36e72N476c39bd.gif" },
              { sellername: "科龙空调京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "353万" },
              { goodsnum: "28" },
            ],
          },
          {
            sku: ["100054014572"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/127399/27/8248/84646/5f22867dE9a61a9df/44f952e09d193cc9.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["2899"],
            productiondetail: ["格力（GREE）正1.5匹 品悦一级能效 变频冷暖 智能 壁挂式卧室空调挂机 KFR-35GW/(35592)FNhAc-A1(WIFI)"],
            itemdetail: ["【今日20-24点张继科直播啦】直播间专属2899元惊喜开抢！ 【下单送查干湖大米和一年质保服务，先到先得！赠完即止！】 【好空调看质量，格力品质更放心！】 "],
            discount: [
              ["限购", "购买1-5件时享受单件价￥2899，超出数量以结算价为准"],
              ["赠品", "查干湖大米 东北大米 格力 生态小镇 明珠1号 2.5kg X1，1年质保换新 X1"],
              ["满额返券", "购满1元格力产品返480元格力优惠券包"],
            ],
            selected: [
              { production: "1.5匹，♥一级变频♥线下同款品悦，1个" },
              { service: "本商品支持保障服务，点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费", "京东发货&供应商售后", "7天无理由退货（安装后不支持）", "预约送货", "本地仓", "货到付款"],
            comment: [
              { commentnum: "4万+" },
              { goodcomrate: "98%" },
              { commentuiwrap: ["送货安装(23864)", "节能环保(11445)", "效果显著(6401)", "风格独特(4378)", "美观大方(4305)", "冷热两用(3332)", "声音很轻(2243)", "外观漂亮(580)", "使用舒适(486)", "操作便捷(273)", "运行流畅(236)", "省时便捷(161)", "睡觉适用(114)"] },

            ],
            sellerinfo: [
              { sellerimg: "https://img10.360buyimg.com/cms/jfs/t1/374/32/5633/14093/5b9f68ddE0d85c7a2/0f1f59c4e8a1978a.jpg!q70.dpg" },
              { sellername: "格力京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "1307万" },
              { goodsnum: "102" },
            ],
          },
          {
            sku: ["100097987872"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/120359/31/8214/83497/5f1eb161E3d8347e5/e24ce25172ca0eea.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["1499"],
            productiondetail: ["康佳（KONKA）1.5匹 挂机 快速冷暖 定速空调 隐藏显示屏LED 静音省电KFR-35GW/DKG03-E3"],
            itemdetail: ["【惠享夏日，7月狂欢购】今日到手价1549元！ 【爆款钜惠】快速制冷！独立除湿！6年质保！ 【立即抢购】库存告急，晒单赠酷喵会员！京东上门安装 "],
            discount: [
              ["满1980减100"],
              ["", ""],
              ["", ""],
            ],
            selected: [
              { production: "1.5匹，爆款定速挂机，1个" },
              { service: "本商品支持保障服务，京东服务+,点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费", "京东发货&供应商售后", "7天无理由退货（安装后不支持）", "预约送货", "本地仓"],
            comment: [
              { commentnum: "10万+" },
              { goodcomrate: "99%" },
              { commentuiwrap: ["安装成功(8037)", "超级省电(1678)", "超强静音(835)", "制冷给力(679)", "风格独特(585)", "美观大方(536)", "使用舒适(87)", "尺寸适宜(82)", "风大马力足(71)", "方便省事(52)", "组装便捷(51)", "方便快捷(19)", "小空间适用(16)"] },

            ],
            sellerinfo: [
              { sellerimg: "https://img10.360buyimg.com/cms/jfs/t18127/139/2219528652/23602/1a020ef4/5aea60a0N67be760b.jpg!q70.dpg" },
              { sellername: "康佳空调京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "68万" },
              { goodsnum: "14" },
            ],
          },
          {
            sku: ["100092991930"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/126723/35/8254/70784/5f1eda1aEa6c63264/29f002f7f4272cb9.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",

            ],
            price: ["1249"],
            productiondetail: ["云米（VIOMI）1匹 定频 冷暖 iCool 1F 速冷 智能除湿 壁挂式卧室空调挂机 KFRd-26GW/Y4PF2-D3"],
            itemdetail: ["【空调超级钜惠】缺货地区咨询客服抢购其他精品 【大一匹】快速冷暖，ECO节能，这价位也没谁了！ 【优质服务】24小时急速安装超时赔付。》冷暖空调1299元起 "],
            discount: [
              ["满1980减100"],
              ["赠品", "空调极速安装延误补贴 X1"],
              ["限购", "购买1-10件时享受单件价￥1299，超出数量以结算价为准"],
            ],
            selected: [
              { production: "1个" },
              { service: "本商品支持保障服务，京东服务+,点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费", "京东发货&售后", "7天无理由退货（安装后不支持）", "预约送货", "本地仓", "货到付款"],
            comment: [
              { commentnum: "1.6万+" },
              { goodcomrate: "98%" },
              { commentuiwrap: ["送货安装(1228)", "简洁大方(110)", "制冷给力(85)", "风格独特(82)", "外观漂亮(52)", "十分静音(16)", "功能合理(9)", "使用舒适(6)", "耐用性佳(6)", "风大马力足(5)", "方便快捷(3)", "转速超高(3)", "租房必备(1)"] },

            ],
            sellerinfo: [
              { sellerimg: "https://img30.360buyimg.com/cms/jfs/t18361/173/2499766466/26837/f0e316f5/5af3a1d9N32543997.jpg!q70.dpg" },
              { sellername: "云米智能京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "147万" },
              { goodsnum: "243" },
            ],
          },
          {
            sku: ["100086577548"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/135222/27/5544/26058/5f1e9d7dE5674ab42/d233b7b5627c9f0c.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["1489"],
            productiondetail: ["志高（CHIGO）1匹 定速冷暖  大风量 静音 壁挂式卧室空调挂机（NEW-GD9F1H3）"],
            itemdetail: ["【志高空调陪你清凉过暑假】30日券后到手不高于1489 【库存紧张】14w+好评，速冷快暖 【价保30天】 "],
            discount: [
              ["满1980减100"],
              ["", " "],
              ["", ""],
            ],
            selected: [
              { production: "1匹 定速系列 1个" },
              { service: "本商品支持保障服务，京东服务+,点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费", "京东发货&商家售后", "7天无理由退货（安装后不支持）", "预约送货", "本地仓"],
            comment: [
              { commentnum: "18万+" },
              { goodcomrate: "98%" },
              { commentuiwrap: ["送货安装(1986)", "制冷给力(240)", "美观大方(184)", "美观大气(154)", "尺寸适宜(113)", "声音很轻(80)", "毫不影响(28)", "使用舒适(19)", "省时便捷(16)", "耐用性佳(14)", "运行流畅(12)", "优质好用(10)", "不占空间(10)"] },

            ],
            sellerinfo: [
              { sellerimg: "https://img10.360buyimg.com/cms/jfs/t17950/307/2380768997/35046/ff460975/5af26268N05d52620.jpg!q70.dpg" },
              { sellername: "志高空调京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "45万" },
              { goodsnum: "10" },
            ],
          },
        ],
      },
      {
        冰箱: [
          {
            sku: ["1000974483945"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/136659/19/5429/132213/5f1ea6b6Ec9ae805a/f5bbb4e373d53351.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["998"],
            productiondetail: ["华凌冰箱 218升 三门冰箱 家用小冰箱 节能电冰箱小 宿舍租房必备节能静音冰箱 BCD-218TH"],
            itemdetail: ["【热卖70000+,日销过千】人气爆款限时抢购到手989! 【好评度99%】分区精储!两天不到1度电!抢先购买! 【价保30天,部分地区库存不足】早下单早享受 查看 "],
            discount: [
              [""],
              ["", " "],
              ["", ""],
            ],
            selected: [
              { production: "【三门三温】218升节能静音三门，1个" },
              { service: "本商品支持保障服务，点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: [],
            comment: [
              { commentnum: "7.9万+" },
              { goodcomrate: "99%" },
              {
                commentuiwrap:
                                ["尺寸适宜(3194)", "美观大方(1469)", "风格独特(1175)", "安装成功(670)", "制冷给力(558)", "多人适用(500)", "十分好用(471)", "声音很轻(461)", "不占空间(157)", "年轻人适用(137)", "风冷无霜(131)", "保修期长(107)", "耐用性佳(106)"],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img10.360buyimg.com/cms/jfs/t1/119983/39/5183/208546/5eeb18e8Ef3e2f19d/458482f514dfb6c6.gif" },
              { sellername: "华凌冰箱京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "101万" },
              { goodsnum: "15" },
            ],
          },
          {
            sku: ["1000612826704"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/146114/17/3625/60626/5f194abeE57ba975c/d00dc06367ea6ee3.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["998"],
            productiondetail: ["TCL 201升 三门电冰箱 中门宽幅变温 小型冰箱 环保养鲜 冰箱小型便捷 节能静音（珍珠白）BCD-201TF1"],
            itemdetail: ["【下单立减100元！劲爆到手底价仅898元！】先抢先得【月销售2万+口碑力荐】38分贝入眠级音量【TCL品牌日】210升三门风冷冰箱钜惠，颠覆价格认知直击活动"],
            discount: [
              ["满998元减100元", "满998元减100元"],
              ["", " "],
              ["", ""],
            ],
            selected: [
              { production: "【居家优选】201升静音三门，1个" },
              { service: "本商品支持保障服务、京东服务+，点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费", "京东发货&售后", "7天无理由退货", "预约送货", "本地仓", "货到付款"],
            comment: [
              { commentnum: "8.3万+" },
              { goodcomrate: "98%" },
              {
                commentuiwrap:
                                [],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img13.360buyimg.com/cms/jfs/t1/99433/31/16268/91168/5e79d646E55fb9943/1588868f1b52d596.gif" },
              { sellername: "TCL冰箱洗衣机京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "132万" },
              { goodsnum: "104" },
            ],
          },
          {
            sku: ["1000127566807"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/125292/11/8203/59218/5f1e4a10E392d1d2f/7bc3234f08f365f3.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["698"],
            productiondetail: ["康佳（KONKA）155升 双门冰箱 匀冷两门 家用小冰箱 节能电冰箱 保鲜静音 BCD-155C2GBU(瓷白)"],
            itemdetail: ["【相同的价格！选择多37升容积！难道不香吗】【居家/租房/酒店/办公室小冰箱】节能静音保鲜【特有匀冷技术！可调整冷冻空间！25万评价】"],
            discount: [
              ["限购", "该商品购买至少1件时可享受优惠"],
              ["", " "],
              ["", ""],
            ],
            selected: [
              { production: "155L 小户型优选【行业爆款】，1个" },
              { service: "本商品支持保障服务、京东服务+，点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费", "京东发货&商家售后", "7天无理由退货", "预约送货", "本地仓", "货到付款"],
            comment: [
              { commentnum: "25" },
              { goodcomrate: "98%" },
              {
                commentuiwrap:
                                ["尺寸适宜(5087)", "多人适用(1165)", "美观大方(1049)", "风格独特(1042)", "声音很轻(508)", "不占空间(465)", "制冷给力(419)", "使用舒适(305)", "合适小户型(301)", "用途广泛(298)", "安装成功(139)", "办公必备(79)", "方便快捷(42)"],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img14.360buyimg.com/cms/jfs/t1/127902/19/160/91343/5eb3be4cEcd13f113/bd58ea1802676570.gif" },
              { sellername: "康佳冰箱洗衣机京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "114" },
              { goodsnum: "85" },
            ],
          },
          {
            sku: ["100054569969"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/129768/15/2953/80293/5ef325e2Eb43ffbf6/f60fd6213db7cadd.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["1098"],
            productiondetail: ["海信 (Hisense) 220升 三门电冰箱 中门软冷冻 小型家用冷藏冷冻 节能省电静音 琥珀金 BCD-220D/Q"],
            itemdetail: ["【海信冰箱，品质保障】今日劲爆秒杀价1098元！抢到就是赚到！ 【下单赠180天延保】独立软冷冻，三门分储防串味！每天只需0.51度电！"],
            discount: [
              ["限购", "购买1-50件时享受单件价￥1098，超出数量以结算价为准"],
              ["满额返券", " 买冰洗品类满500元返空调&电视品类东券，额度满1500减100"],
              ["", ""],
            ],
            selected: [
              { production: "【超级单品】220L二级节能大容量，1个" },
              { service: "本商品支持保障服务、京东服务+，点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费", "京东发货&供应商售后", "7天无理由退货", "30-30-180", "安心服务", "预约送货", "本地仓", "货到付款"],
            comment: [
              { commentnum: "10万+" },
              { goodcomrate: "99%" },
              {
                commentuiwrap:
                                ["容量适宜(2320)", "美观大方(1028)", "美观大气(982)", "超强配置(359)", "空间足够(329)", "多人适用(315)", "超强静音(285)", "制冷给力(244)", "家居实用(226)", "节能环保(147)", "家用适合(97)", "口碑很好(39)", "安装免费(36)"],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img13.360buyimg.com/cms/jfs/t1/100274/25/18734/6082/5e957e40E24d9c3f5/8c4e7b0f2e2908ac.png" },
              { sellername: "海信京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "787万" },
              { goodsnum: "287" },
            ],
          },
          {
            sku: ["100029341632"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/112337/12/13172/31576/5f199643E6d1c7aca/d783714cbdb3254e.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["1379"],
            productiondetail: ["美的(Midea) 213升 三门三温家用冰箱冷藏冷冻大容量保鲜节能省电静音 BCD-213TM(E)"],
            itemdetail: ["【购冰冷抽5G手机】满减到手不高于1279！小巧不占地，精细分储不串味，三门三温【推荐260L升级款,更高性价比】 "],
            discount: [
              ["赠品", "冰箱、洗衣机核心部件10年换新保 X1"],
              ["满减", "每满1000元，可减100元现金"],
              ["", ""],
            ],
            selected: [
              { production: "213升精细分储不串味，1个" },
              { service: "本商品支持保障服务、京东服务+，点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["京东发货&供应商售后"],
            comment: [
              { commentnum: "30万+" },
              { goodcomrate: "99%" },
              {
                commentuiwrap:
                                ["容量适宜(1854)", "美观大方(1133)", "美观大气(798)", "安装成功(707)", "实用性强(347)", "空间足够(310)", "多人适用(222)", "声音很轻(215)", "制冷给力(198)", "适合家用(69)", "性能优良(52)", "保鲜节能(50)", "口碑很好(12)"],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img13.360buyimg.com/cms/jfs/t1/59503/26/15855/15828/5dd3ad7fE415385d9/2167a5c2721eac6f.jpg!q70.dpg" },
              { sellername: "美的京东自营官方旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "2764万" },
              { goodsnum: "1984" },
            ],
          },

        ],
      },
      {
        电脑: [
          {
            sku: ["1000347782119"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/121867/40/5428/307140/5ef04ef0E6ad67d70/78bb3e02c5c012e5.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["2889"],
            productiondetail: ["联想(Lenovo)天逸510S 英特尔酷睿i3 个人商务台式机电脑整机(i3-9100 8G 1T WiFi 三年上门 Win10)21.5英寸"],
            itemdetail: ["【新品推荐】10代酷睿i3四核八线程，7.4L小机箱+无线wifi节约空间随处安放，80万小时稳定性测试！全新天逸510S加量不加价》(此商品不参加上述活动) "],
            discount: [
              ["换购", "购买1件可优惠换购热销商品"],
              ["限购", "购买1-30件时享受单件价￥2889，超出数量以结算价为准"],
              ["", ""],
            ],
            selected: [
              { production: "21.5英寸，【九代酷睿】i3-9100 8G 1T，1个" },
              { service: "本商品支持保障服务，京东服务+,点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费(20kg内)", "京东发货&售后", "7天无理由退货（激活后不支持）", "京准达", "211限时达", "免举证退换货", "3年以上质保", "预约送货", "部分收货", "自提", "可配送港澳台"],
            comment: [
              { commentnum: "16万+" },
              { goodcomrate: "96%" },
              {
                commentuiwrap:
                                ["小巧可爱(974)", "运行速快(473)", "方便快捷(420)", "简单方便(354)", "十分大气(315)", "简洁大方(189)", "质量上乘(161)", "启动快速(106)", "散热超快(75)", "网速极佳(49)", "倍感舒适(23)"],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img13.360buyimg.com/cms/jfs/t1/112555/40/8269/35265/5eccde31E740602fa/b03c8e74d483c402.gif" },
              { sellername: "联想京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "1178万" },
              { goodsnum: "833" },
            ],
          },
          {
            sku: ["1000409635145"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/134599/11/4954/111549/5f16626cEdcb0b187/222190e73c5b14e5.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["2799"],
            productiondetail: ["戴尔(DELL)成就3681英特尔酷睿i3商用办公高性能台式电脑整机(十代i3-10100 8G 1T 三年上门售后)21.5英寸"],
            itemdetail: [" "],
            discount: [
              ["附件", "戴尔(DELL)SE2218HV 21.5英寸 LED宽屏液晶显示器 X1"],
              ["限购", "购买1-50件时享受单件价￥2799，超出数量以结算价为准"],
              ["", ""],
            ],
            selected: [
              { production: "21.5英寸，十代新品爆款|i3 8G 1T，1个" },
              { service: "本商品支持保障服务，京东服务+,点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费(20kg内)", "京东发货&售后", "7天无理由退货（激活后不支持）", "京准达", "211限时达", "免举证退换货", "3年以上质保", "预约送货", "部分收货", "自提", "可配送港澳台及海外"],
            comment: [
              { commentnum: "9.1万+" },
              { goodcomrate: "95%" },
              {
                commentuiwrap:
                                ["小巧可爱(808)", "运行速快(332)", "简单方便(317)", "方便快捷(233)", "十分大气(175)", "运行超快(104)", "简洁大方(99)", "散热超快(84)", "质量上乘(77)", "运行安静(15)", "倍感舒适(14)"],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img10.360buyimg.com/cms/jfs/t19489/346/2338088327/14072/d0612f24/5af137d8N7e004635.png" },
              { sellername: "戴尔京东自营官方旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "1006万" },
              { goodsnum: "483" },
            ],
          },
          {
            sku: ["1000544446410"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/137915/37/3569/396232/5f191216Ee3800a73/fdb5d2cccf793437.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["1649"],
            productiondetail: ["方正（iFound）T229 超薄一体机电脑 双核/四核/i3商务办公台式机 窄边框高清家用娱乐整机 【21.5特惠爆款】AMD A6/8G/120G"],
            itemdetail: ["【方正电脑放暑价，限时嗨降，满万减300】赠送方正键鼠套装+大鼠标垫》全场白条3期免息，更多优惠》》 "],
            discount: [
              ["", ""],
              ["限购", "购买1-50件时享受单件价￥1649，超出数量以结算价为准，仅限购买一次"],
              ["", ""],
            ],
            selected: [
              { production: "【21.5特惠爆款】AMD A6/8G/120G，1个" },
              { service: "本商品支持保障服务,点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["京东发货&商家售后", "7天无理由退货（激活后不支持）", "211限时达", "预约送货", "部分收货", "自提"],
            comment: [
              { commentnum: "5800+" },
              { goodcomrate: "98%" },
              {
                commentuiwrap:
                                ["反应灵敏(94)", "十分大气(62)", "十分流畅(36)", "简单方便(34)", "运行超快(33)", "简洁大方(26)", "方便快捷(17)", "质量上乘(10)", "通透清晰(7)", "功能齐全(6)", "网速极佳(5)"],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img30.360buyimg.com/popshop/jfs/t1/73813/22/7404/34696/5d5614deE93f05397/b5231e78d1ae4a1a.jpg!q70.dpg" },
              { sellername: "方正（ifound）电脑东星专卖店" },
              { isSelfsell: "" },
              { fansnum: "4.3万" },
              { goodsnum: "40" },
            ],
          },
          {
            sku: ["1000737768787"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/134187/30/5695/500660/5f2287d2E17df027d/84b34f01fd3c0e7f.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["1599"],
            productiondetail: ["硕扬 intel十二线程强芯/GTX1050独显/16G内存/办公游戏台式电脑主机/DIY组装机全套"],
            itemdetail: ["【行业爆款·高配主机·超值之选】活动下单即送24英寸75Hz电竞显示器，抢升i9级十二线程强芯，抢升16G高频内存！升级高端电竞独显，血亏冲量！"],
            discount: [
              ["赠品", "【高清24英寸曲面显示器】 2800R曲率 75Hz刷新率 HDMI高清 液晶电脑屏幕 银白色 X1…】炫光机械手感键盘鼠标套装/适用于游戏办公家用 X1，【精致鼠标垫定制版】硕扬定制豪华鼠标垫 X1"],
              ["限购", "购买1-30件时享受单件价￥1599，超出数量以结算价为准，仅限购买一次"],
              ["", ""],
            ],
            selected: [
              { production: "1个" },
              { service: "本商品支持保障服务,点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["商家发货&售后", "15天无理由退货", "24H发货", "送运费险", "极速审核", "货到付款"],
            comment: [
              { commentnum: "8.5万+" },
              { goodcomrate: "98%" },
              {
                commentuiwrap:
                                ["运行速快(2895)", "反应灵敏(682)", "简单方便(573)", "运行超快(493)", "十分大气(283)", "简洁大方(190)", "方便快捷(50)", "质量上乘(40)", "十分酷炫(26)", "网速极佳(24)", "倍感舒适(19)"],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img12.360buyimg.com/cms/jfs/t16909/264/239…37176/7f0bdcec/5af020cdN1237f5f6.jpg!q70.dpg" },
              { sellername: "硕扬DIY电脑旗舰店" },
              { isSelfsell: "" },
              { fansnum: "41万" },
              { goodsnum: "65" },
            ],
          },
          {
            sku: ["100042382794"],
            imgview: [
              "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/114453/25/12115/292138/5f0bce2aE9f1353c6/4db91203668087e8.jpg!q80.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
              "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg",
            ],
            price: ["2889"],
            productiondetail: ["联想(Lenovo)天逸510S 十代英特尔酷睿i3 台式机电脑整机(i3-10100 8G 1T wifi win10 三年上门)21.5英寸"],
            itemdetail: ["全新10代酷睿i3四核八线程，7.4L小机箱+无线wifi节约空间随处安放，80万小时稳定性测试！可升级i5应对更多任务处理 "],
            discount: [
              ["", ""],
              ["限购", "购买1-30件时享受单件价￥2799，超出数量以结算价为准"],
              ["", ""],
            ],
            selected: [
              { production: "21.5英寸，【十代酷睿】i3-10100 8G 1T，1个" },
              { service: "本商品支持保障服务，京东服务+,点击可选服务" },
            ],
            delivery: ["北京天安门广场000号"],
            weight: ["不计重量"],
            deliveryservice: ["99元免基础运费(20kg内)", "京东发货&售后", "7天无理由退货（激活后不支持）", "京准达", "211限时达", "免举证退换货", "3年以上质保", "预约送货", "部分收货", "自提", "可配送港澳台"],
            comment: [
              { commentnum: "16万+" },
              { goodcomrate: "96%" },
              {
                commentuiwrap:
                                ["小巧可爱(974)", "运行速快(473)", "方便快捷(420)", "简单方便(354)", "十分大气(315)", "简洁大方(189)", "质量上乘(161)", "启动快速(106)", "散热超快(75)", "网速极佳(49)", "倍感舒适(23)"],
              },

            ],
            sellerinfo: [
              { sellerimg: "https://img13.360buyimg.com/cms/jfs/t1/112555/40/8269/35265/5eccde31E740602fa/b03c8e74d483c402.gif" },
              { sellername: "联想京东自营旗舰店" },
              { isSelfsell: "京东自营" },
              { fansnum: "1178万" },
              { goodsnum: "833" },
            ],
          },
        ],
      },

    ]

    // const currentparams = this.props.match.params
    const { category, sku } = this.props.match.params

    const mockcategorydata = mockdata.filter((item) => item[category])
    const mocksku = mockcategorydata[0][category].filter((item) => item.sku == sku)
    if (mocksku.length === 1) {
      this.setState({
        sku,
        price: mocksku[0].price,
        imgview: mocksku[0].imgview,
        productiondetail: mocksku[0].productiondetail,
        itemdetail: mocksku[0].itemdetail,
        discount: mocksku[0].discount,
        selected: mocksku[0].selected,
        delivery: mocksku[0].delivery,
        weight: mocksku[0].weight,
        comment: mocksku[0].comment,
        sellerinfo: mocksku[0].sellerinfo,
      })
    } else {
      this.setState({
        sku: 0,
      })
    }
  }

  componentDidUpdate() {
    // console.log(this.props.history.go())
    // console.log(this.props.match.params.category)
    // const that = this
    // function backWay() {
    //   window.location.href = `http://localhost:6100/productionlist/${that.props.match.params.category}`
    // }
    // if (document.getElementById('dataupdateshow')) {
    //   setTimeout(backWay, 3000)
    // }
    // setInterval(go, 1000);
      // };
      // var x=3; //利用了全局变量来执行
      // function go(){
      // x--;
      // if(x>0){
      // document.getElementById("sp").innerHTML=x; //每次设置的x的值都不一样了。
      // }else{
      // location.href='res.html';
      // }
  }

  componentWillUnmount() {
    this.setState({
      imgview: [],
      price: [],
      productiondetail: [],
      itemdetail: [],
      discount: [],
      selected: [],
      delivery: [],
      weight: [],
      deliveryservice: [],
      comment: [],
      sellerinfo: [],
    })
  }

  render() {
    // debugger
    const {
      imgview,
      sku,
      price,
      discount,
      selected,
      delivery,
      weight,
      comment,
      sellerinfo,
      deliveryservice,
    } = this.state
    return (
      <div className="productioninfowrap">
        <LazyImgHeaderUi />
        <SplitLineUi />
        {
            (sku === 0)
              ? (
                  <div
                    id="dataupdateshow"
                    style={{
                     fontSize:'16px', color:'#f2270c', margin:'200px auto', width: '100%', textAlign: 'center',
                    }}
                    onClick={() => { this.props.history.goBack() }}
                  >
                  数据更新中,请点击我或者返回,选择其他产品
                  </div>
                  )
              : (
                <>
                  <i
                    id={styles.iconarrowleftcopystyle}
                    className="iconfont icon-arrow-left-copy"
                  >
                    &#xe602;
                  </i>
                  <i id={styles.icondeng} className="iconfont icon-deng">&#xe70f;</i>
                  <LazyImgShowViewUi imgsrcs={imgview} />
                  <LazyBuyInfoUi price={price} productiondetail={this.state.productiondetail} itemdetail={this.state.itemdetail} />
                  <LazyDiscountUi discount={discount} />
                  <SplitLineUi />
                  <LazyDiscountUi2 selected={selected} />
                  <SplitLineUi />
                  <LazyDiscountUi3 delivery={delivery} />
                  <SplitLineUi />
                  <LazyDiscountUi4 weight={weight} />
                  <LazyDiscountUi5 deliveryservice={deliveryservice} />
                  <LazyCommentUi comment={comment} />
                  <LazyCommentlistUi />
                  <SplitLineUi />
                  <LazyCommentlistUi />
                  <div style={{ background: "#fff", width: "100%", paddingBottom: "10px" }}>
                    <div className={styles.viewallcomment}>
                      <span>查看全部评价</span>
                      <i className="iconfont icon-arrow-right">&#xe601;</i>
                    </div>
                  </div>
                  <LazySelectedBar sku={sku} price={price} />
                  <SplitLineUi />
                  <LazyQABarUi />
                  <LazySellerInfoUi sellerinfo={sellerinfo} />
                </>
              )
        }
      </div>
    );
  }
}

export default ProductionInfo;
