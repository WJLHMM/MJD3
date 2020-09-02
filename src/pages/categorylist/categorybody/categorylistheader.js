/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { withRouter } from 'react-router-dom';
import {
  categorylistheaderstyle,
} from '@/pages/categorylist/categorybody/categorybodystyle';

const CategoryListHeader = (props) => {
  const a = [['热门推荐', 'WQR2006'], ['手机数码', 'WQ1980'], ['电脑办公', 'WQ1981'], ['家用电器', 'WQ1982'], ['计生情趣', 'WQ1988'], ['美妆护肤', 'WQ2044'], ['个护清洁', 'WQ2046'], ['汽车生活', 'WQ1990'], ['京东超市', 'WQ1968'], ['男装', 'WQ1972'], ['男鞋', 'WQ1974'], ['女装', 'WQ1973'], ['女鞋', 'WQ1975'], ['母婴童装', 'WQ1985'], ['图书音像', 'WQ1996'], ['运动户外', 'WQ1989'], ['内衣配饰', 'WQ1976'], ['食品生鲜', 'WQ1983'], ['酒水饮料', 'WQ1984'], ['家具家装', 'WQ1992'], ['家居厨具', 'WQ1991'], ['箱包手袋', 'WQ1977'], ['钟表珠宝', 'WQ1979'], ['玩具乐器', 'WQ1986'], ['医药保健', 'WQ1987'], ['宠物生活', 'WQ1994'], ['礼品鲜花', 'WQ1993'], ['农资绿植', 'WQ1998'], ['生活旅行', 'WQ1995'], ['奢侈品', 'WQ1970'], ['京东国际', 'WQ1971'], ['艺术邮币', 'WQ1997'], ['二手商品', 'WQ2002'], ['特产馆', 'WQ1999'], ['京东金融', 'WQ2000'], ['国际名牌', 'WQ1969'], ['拍卖', 'WQ2001'], ['房产', 'WQ2008'], ['工业品', 'WQ2102']];
  const { cid } = props.match.params
  const titlearray = a.filter((item) => item[1] === cid)
  return (
    <div
      className="categorylistheader"
      css={categorylistheaderstyle}
    >
      <h3>{titlearray[0][0]}</h3>
      <div className="ranklist">
        <i className="iconfont icon-paihangbang">&#xe707;</i>
        <span>排行榜</span>
        <i className="iconfont icon-arrow-right">&#xe601;</i>
      </div>
    </div>
  )
}
export default withRouter(CategoryListHeader)
