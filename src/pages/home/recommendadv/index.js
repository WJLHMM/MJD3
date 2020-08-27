import React from 'react';
import { Card, Grid } from 'antd-mobile';
import LazyLoad from 'react-lazyload';

const a = [

  ['//img20.360buyimg.com/mobilecms/s372x372_jfs/t1/106720/5/6864/102152/5df64dd3E54ef6db2/17cc73b43ad6538d.jpg!q70.dpg',
    ' Redmi K30 王一博同款 120Hz流速屏 前置挖孔双摄 索尼6400万后置四摄 4500mAh超长续航 27W快充 6GB+128GB 深海微光 游戏智能手机 小米 红米',
    '1399'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/105365/9/16400/389974/5e78ae27E56994049/eef08d8b49183faa.jpg!q70.dpg',
    ' Redmi K30 Pro 5G先锋 骁龙865旗舰处理器 弹出式超光感全面屏 索尼6400万高清四摄 4700mAh长续航 33W闪充 8GB+128GB 太空灰 游戏智能手机 小米 红米',
    '2699'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/110814/20/15966/94217/5f1a9a5bE8000b9f9/8392e5dfc6cf32c9.jpg!q70.dpg',
    ' 华凌空调 2匹 一级能效 空调立式 冷暖变频 智能WIFI 客厅圆柱空调立式柜机 KFR-51LW/N8HB1',
    '3999'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/102911/12/15632/121784/5e71ccd6E63b84804/592e58f2fc2acaae.jpg!q70.dpg',
    ' Redmi K30 5G双模 120Hz流速屏 骁龙765G 6GB+128GB 深海微光 游戏智能手机 小米 红米',
    '1699'],
  ['//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/111591/23/9699/185290/5edf5cd1Ebd5d97be/6cf95011926a4f83.jpg!q70.dpg',
    '家政清洁竹纤维珊瑚绒清洁毛巾七色保洁布抹布分区使用加厚超吸水 除油清洁布',
    '6'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/148021/38/3276/191409/5f143714Eb8978801/c8eb111f10184ba7.jpg!q70.dpg',
    '【蒙自扶贫馆】云南蒙自石榴 云南甜石榴 云南石榴 甜石榴 6个装 新鲜水果',
    '22'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/54085/1/13732/194509/5da6d50fE32d0191a/68d0ac29ce4a326d.jpg!q70.dpg',
    ' Redmi 8A 5000mAh大电量 大字体大音量大内存 骁龙八核处理器 AI人脸解锁 莱茵护眼全面屏 4GB+64GB 耀夜黑 游戏智能老人手机 小米 红米',
    '699'],
  ['//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/111165/13/4580/154802/5eae7b9aEe1fbe4f0/7166e678e91cfaba.jpg!q70.dpg',
    '【2件|减|20 弹力爆款】AEMAPE/美国苹果2020夏季新品薄款弹力直筒修身牛仔裤男 5515深蓝色 34码(腰围2尺7寸)',
    '69'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/133304/8/3850/118158/5f044555E4d0449dc/0d9ae8dd50e133a1.jpg!q70.dpg',
    'kitshine韩国进口竹纤维洗碗巾抹布不粘油洗碗布百洁布好清洗不掉毛不用洗洁精洗碗巾加厚双层抹布 大号洗碗巾10条装',
    '55'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/107137/38/14911/209658/5eaa3dc5E2a2b892c/2c7536ac3ddd3d07.jpg!q70.dpg',
    ' 好顺自喷漆汽车用品轮毂改色摩托车金属防锈家具翻新喷漆罐手喷型划痕修复油漆 39#黑色',
    '7'],
  ['//img30.360buyimg.com/mobilecms/s372x372_jfs/t4360/351/980265536/84099/8614911e/58bbcc4bNa44846c4.jpg!q70.dpg',
    '保赐利自动喷漆罐汽车自喷漆黑色补漆笔 油漆哑光磨砂黑色手喷漆 39黑色（亮黑）',
    '10'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/123337/34/6924/208231/5f0bc528Eecf3a164/9066686e97e34dce.jpg!q70.dpg',
    '【日本】贝壳风铃文胸美背大U无钢圈聚拢运动文胸瑜伽文胸 防上滑美背聚拢文胸抹胸【多色可选】 卡其(单件) M码【80-110斤】',
    '39'],
  ['//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/82459/12/8546/351173/5d67498eE62397c66/5140248c022f4499.jpg!q70.dpg',
    ' Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充 小金刚品质保证 6GB+64GB 皓月白 游戏智能手机 小米 红米',
    '999'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/137466/21/2250/100768/5ee7573dEa8321eca/548ffd17f79e62cc.jpg!q70.dpg',
    ' 【向往的生活同款】小米10 双模5G 骁龙865 1亿像素8K电影相机 对称式立体声 8GB+128GB 钛银黑',
    '3799'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/79831/15/9128/176682/5d6e7844E8179da21/75e94bc5a76e0ebc.jpg!q70.dpg',
    ' 小米手环4石墨黑 AI彩屏心率运动手环游泳姿势识别50米防水6轴传感器24小时高精准心率监测',
    '149'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/115877/32/3418/261289/5ea7c352E9fa71943/345270c4d6964139.jpg!q70.dpg',
    ' [2020新款]酷比魔方 iplay20 10.1英寸1080P全贴合高清8核4G全网通通话平板电脑 前黑后黑 4G+64G',
    '699'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/81100/32/9915/187881/5d7774f4E5efbda45/2bbfba2bc85fbfac.jpg!q70.dpg',
    ' 英睿达（Crucial）1TB SSD固态硬盘 M.2接口(NVMe协议) P1系列/Micron原厂出品-必属精品',
    '769'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t22261/303/1092680464/16580/fb734e0c/5b1f39c1Ndec00e2f.jpg!q70.dpg',
    ' Apple Pencil 手写笔MK0C2CH(适用2018款9.7英寸iPad/2019款iPad Air/10.5英寸和2017款12.9英寸iPad Pro)',
    '728'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/132661/29/4466/168974/5f0e8d9cE8bce6ead/e449e90fdcd47233.jpg!q70.dpg',
    ' 小米 红米8A 手机 智能老人学生机 深海蓝 4GB+64GB',
    '685'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/52252/35/10516/124064/5d7808e0E46202391/7100f3733a1c1f00.jpg!q70.dpg',
    ' Apple iPhone 11 (A2223) 128GB 白色 移动联通电信4G手机 双卡双待',
    '5899'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/96908/6/5455/48331/5dedee7bE564464f3/b4d8e15a0a1b2ea8.jpg!q70.dpg',
    'Apple 苹果 iphone 11 手机 紫色 全网通 64GB',
    '4689'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/120337/17/7615/90438/5f170004Eab7c8686/f73e9f5236673ab2.jpg!q70.dpg',
    ' 荣耀Play4T Pro 麒麟810芯片 OLED屏幕指纹 4800万高感光夜拍三摄 22.5W超级快充 全网通6GB+128GB 冰岛幻境',
    '1389'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/104557/38/16877/182276/5e7f1e22Eb2a9e8de/f5d340c94a71b70c.jpg!q70.dpg',
    '新款5G平板电脑安卓通话wifi平板手机二合一12寸高清大屏平板电脑全网通游戏王者吃鸡 可爱粉【6G+32G】+12重豪礼+五年保修 移动联通+WIFI领航版',
    '468'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/147408/26/1239/121732/5ef01777E41c0c55b/9fb1899b9ceb1d7e.jpg!q70.dpg',
    '邦臣健得龙腰椎间盘治疗仪腰间盘突出牵引器按摩仪脊椎按摩器家用曲度腰部中频多功能经络理疗仪 腰椎治疗仪升级旗舰款+护腰理疗大礼包',
    '998'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/117496/25/12915/88865/5f1a9cb9E4eee68ae/14c85ccd7c9df25c.jpg!q70.dpg',
    ' 华凌空调 2匹 变频冷暖 圆柱 空调立式 柜机 智能WIFI 自清洁 客厅空调柜机 KFR-51LW/N8HA3',
    '3399'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/101220/17/18847/64918/5e994d76E9d564bf1/453f234df90b6f7a.jpg!q70.dpg',
    ' 小米 Redmi AirDots S 真无线蓝牙耳机 分体式耳机 蓝牙5.0 收纳充电盒',
    '129'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/134878/27/5256/568351/5f1b0044Ece5be5ea/8092f034a6ed4ab9.png',
    ' 【二手9成新】Apple iPhone X 二手 苹果x 二手苹果x 苹果x二手 二手手机 苹果x手机 深空灰 64G 全网通4G【送苹果充电器】',
    '2890'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/146958/29/3186/449915/5f1293c0E8616817f/f3a1af32363fa7ab.jpg!q70.dpg',
    ' 【二手95新】Apple Macbook Pro苹果笔记本电脑13.3英寸 家用办公商务手提超极本 【热卖爆款】MF840-i5/8G/256G 顺丰直邮【晒单赠大礼包】',
    '4788'],
  ['//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/129220/34/7882/78310/5f195b14Eca508547/20ca4d5d5a060b84.jpg!q70.dpg',
    ' 美的（Midea）新能效 智行II 智能变频冷暖 2匹客厅圆柱空调立式柜机 KFR-51LW/N8MJA3',
    '4029'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/132641/39/4858/99963/5f156453E2800bf27/c70938d10410a191.jpg!q70.dpg',
    ' 小米移动电源3 10000mAh 快充版黑色双口双向18W 锂聚合物电芯适用小米10/红米9苹果安卓redmi手机充电宝',
    '79'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t3301/7/5927099509/235950/b9629143/5897dc46Nd538d705.jpg!q70.dpg',
    '国康旅游轻便轮椅车便携式小轮椅折叠轻便轮椅车老年人残疾人轮椅车小轮椅 16寸免充气折叠把',
    '178'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/119272/1/5770/332669/5eb64be4E3c25fc80/88c7582d58b26c36.jpg!q70.dpg',
    ' 绿之源 防撞自粘墙贴壁纸墙纸8毫米加厚70*77CM珍珠白 客厅电视背景墙装饰贴卧室宿舍隔音隔热防污贴',
    '19'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/88467/22/16460/988315/5e7ac43fEbdaefe04/64345d6b5326d8cc.png',
    '小米 Redmi红米K30pro 5G手机【可选变焦版】 天际蓝 6G+128GB全网通',
    '2458'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t21196/95/1045873145/529852/a91562f5/5b1e3377N26d15b65.jpg!q70.dpg',
    '奥的 304不锈钢碗架水槽沥水架厨房置物架台面收纳架 碗碟架放碗架刀架砧板架厨房用品 A款-长83CM双槽单层（全套）+送8卡钩',
    '179'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/99045/10/12466/150046/5e4ab2a1E3494d9a3/7a5db5c3439520f4.jpg!q70.dpg',
    '红粉宣言2020春季新款T恤女短袖百搭条纹纯棉宽松大码上衣 蓝色-长 L',
    '80'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/92699/34/16926/310529/5e8404efE918d50a5/f61a216ebf26dfbd.jpg!q70.dpg',
    '阿斯卡利（ASCARI）竹炭纤维洗碗布不沾油洗碗巾吸水不掉毛双层加厚厨房抹布 10条白色16*18厘米',
    '23'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/97899/34/4791/29820/5de9118eE48d1a765/a90bc2bf378556b4.jpg!q70.dpg',
    ' 小米 立式无线充 20WMAX无线闪充 黑色 通用快充适配小米9pro等机型',
    '99'],
  ['//img30.360buyimg.com/mobilecms/s372x372_jfs/t1/142644/24/1144/119426/5eef04feE5e72e2cf/90e93748c748f246.jpg!q70.dpg',
    '小米 Redmi红米K30 5G版 手机 时光独白 6GB+64GB',
    '1408'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/112137/12/5456/68740/5eb3b931E16e0c046/325620cedd31ab6b.jpg!q70.dpg',
    ' 格力（GREE）京品家电加湿器 静音 上加水 空气加湿办公室卧室家用 香薰 母婴可用 双重防漏水SC-30X76',
    '129'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/147950/40/2542/356214/5f081704E57df8caf/e20b776d0b5f3898.png',
    ' 【二手9成新】Apple iPhone8 苹果8 苹果手机 二手手机 灰色 64G 全网通+无线充',
    '1688'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/49379/4/94/144949/5cd241b5Ee2262304/d59bd88f0d960c5d.jpg!q70.dpg',
    ' TP-LINK TL-WDR5620 AC1200 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器',
    '98'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/44568/18/9705/92821/5d674461Eaeb8bdb7/f284ee100e8e46d5.jpg!q70.dpg',
    ' Redmi Note8Pro 6400万全场景四摄 液冷游戏芯 4500mAh长续航 NFC 18W快充 红外遥控 6GB+64GB 冰翡翠 游戏智能手机 小米 红米',
    '1099'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/107669/20/7092/65407/5e5760fdE1963be67/5656f1dd469bc676.jpg!q70.dpg',
    ' 台电（TECLAST）P80X安卓平板电脑八核8英寸高清双4G通话上网2+32GB网课学习影音娱乐 黑色',
    '499'],
  ['//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/114836/20/12386/153715/5f0ecd3bEa7554082/3ccf174adfdf2214.jpg!q70.dpg',
    ' 半岛308白癜风治疗仪紫外线光疗仪牛皮癣银屑病白斑308nm准分子光灯家用窄谱中波仪器非激光可租赁 升级款0耗材无需计时器（送大礼包）（不支持租赁）',
    '12500'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/144092/40/409/108621/5ee19846Ee0965474/4b3aa8d6079740ec.jpg!q70.dpg',
    ' 小米手环 5 石墨黑 动态彩屏 心率运动手环50米防水女性健康24小时高精准心率监测磁吸式充电',
    '189'],
  ['//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/148980/31/2470/207752/5f05796aE664f4838/1e1aee8a2abc66a2.jpg!q70.dpg',
    'kitshine韩国进口竹纤维洗碗巾不用洗洁精加厚吸水洗碗布不掉毛百洁布厨房灶台擦桌子抹布 大号洗碗巾1条装（颜色随机）',
    '9'],
  ['//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/44575/29/8864/72764/5d5ab03cE63933dff/bdeb0317faf94414.jpg!q70.dpg',
    ' 小米活塞耳机 清新版 黑 入耳式手机耳机 通用耳麦',
    '29'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t8107/37/1359438185/72159/a6129e26/59b857f8N977f476c.jpg!q70.dpg',
    ' Apple iPhone 8 Plus (A1864) 128GB 深空灰色 移动联通电信4G手机',
    '4399'],
  ['//img30.360buyimg.com/mobilecms/s372x372_jfs/t1/113763/35/10755/184448/5ef076d4E23a60810/f26df22c9c524d65.jpg!q70.dpg',
    ' Redmi 9 5020mAh大电量 1080P全高清大屏 大字体大音量大内存 全场景AI四摄 高性能游戏芯 4GB+64GB 碳素黑 游戏智能手机 小米 红米',
    '799'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/141607/16/3612/58300/5f18f0ecE5b8b3e75/f2b04b861d61b339.jpg!q70.dpg',
    ' Apple AirPods Pro 主动降噪无线蓝牙耳机 适用iPhone/iPad/Apple Watch',
    '1899'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/140850/8/3369/135780/5f1568f4E9e47d24c/20f8d543b5752e01.jpg!q70.dpg',
    '华为（HUAWEI）nova7 SE 5G 手机【6期免息/30天价保/质保2年】 银月星辉 全网通8GB+128GB',
    '2399'],
  ['//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/120548/11/1472/69596/5ebcc695E656b2d37/aa132f37e0271cca.jpg!q70.dpg',
    ' 联想(Lenovo)小新Air14 2020锐龙版轻薄本 全面屏办公笔记本电脑(6核R5-4600U 16G 512G 高色域)深空灰',
    '4499'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/124221/38/7341/101808/5f1564c3Ec3ecf22e/45770a09a709ee1a.jpg!q70.dpg',
    ' 小米移动电源3 20000mAh USB-C 18W双向快充版 三台设备同时充电适用小米10/红米9 苹果安卓redmi手机充电宝',
    '129'],
  ['//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/148178/35/3717/144135/5f1bc1a4Ed4e1506d/0b903898c9796799.jpg!q70.dpg',
    '德高美缝剂 双组份彩瓷美缝剂瓷砖地砖通用 填缝剂 勾缝剂防水防霉十大品牌美缝胶 贵族银',
    '178'],
  ['//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/116517/15/12769/92847/5f1654daE92890559/ef44f235984b0103.jpg!q70.dpg',
    ' 华凌冰箱 175升 双门两门冰箱 家用小冰箱 节能电冰箱 宿舍租房必备节能静音冰箱 BCD-175CH',
    '799'],
];
const data = a.map((_val) => ({
  icon: _val[0],
  text: _val[1],
  text2: _val[2],
}));

const RecommendadvUi = (props) => (
  <div className="recommendadvwrap">
    <Card>
      <Card.Header
        title={(
          <div className="titlewrap" style={{ width: '100%', height: '2.4rem' }}>
            <img alt="uploadpics" style={{ width: '100%', height: '100%' }} src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" />
          </div>
                        )}
      />
      <Card.Body>
        <Grid
          data={data}
          columnNum={2}
          hasLine={false}
          renderItem={(dataItem) => (
            <div id="recomitem" style={{ padding: '0px', width: '100%' }}>
              <LazyLoad
                height={props.clientHeight}
                offset={100}
              >
                <img src={dataItem.icon} style={{ width: '100%', height: '11.22rem' }} alt="" />
              </LazyLoad>
              <div id="recotext" style={{ color: '#888', width: '100%', height: '3.5rem' }}>
                <p className="recotext1">
                  <img alt="showpics" src="//img10.360buyimg.com/jdphoto/jfs/t1/67472/23/16111/1062/5dd66228Ed3249693/c561eee12d153d56.png" />
                  {dataItem.text}

                </p>
                <p style={{ color: '#f23030', height: '40%', textAlign: 'left' }}>
                  <span>￥</span>
                  <em style={{ fontSize: '18px', fontFamily: 'JDZhengHT-EN-Regular' }}>{dataItem.text2}</em>
                </p>
              </div>
            </div>
          )}
        />

      </Card.Body>
    </Card>
  </div>
);

export default RecommendadvUi;
