import {
  GoodsFilled,
  HomeFilled,
  Shop,
  List,
  QuestionFilled,
  Ticket,
  Promotion,
  WalletFilled,
  TrendCharts,
} from '@element-plus/icons-vue';
import { reactive, markRaw } from 'vue';

export default () =>
  reactive([
    {
      path: '/home',
      title: '首页',
      show: true,
      icon: markRaw(HomeFilled),
    },
    {
      path: '/goods',
      title: '商品管理',
      show: true,
      icon: markRaw(GoodsFilled),
      children: [
        {
          path: '/goods/list',
          title: '商品列表',
          show: true,
        },
        {
          path: '/goods/add',
          title: '新增商品',
          show: true,
        },
      ],
    },
    {
      path: '/store',
      title: '店铺管理',
      show: true,
      icon: markRaw(Shop),
      children: [
        {
          path: '/store/setting',
          title: '基础信息',
          show: true,
        },
        {
          path: '/store/category',
          title: '分类管理',
          show: true,
        },
        {
          path: '/store/staff',
          title: '员工管理',
          show: true,
        },
        {
          path: '/store/decoration',
          title: '店铺装修',
          show: true,
        },
        {
          path: '/store/announce',
          title: '店铺公告',
          show: true,
        },
      ],
    },
    {
      path: '/order',
      title: '订单/配送',
      show: true,
      icon: markRaw(List),
      children: [
        {
          path: '/order/list',
          title: '订单管理',
          show: true,
        },
        {
          path: '/order/comment',
          title: '订单评价',
          show: true,
        },
        {
          path: '/order/staff',
          title: '物流管理',
          show: true,
        },
      ],
    },
    {
      path: '/aftersale',
      title: '售后管理',
      show: true,
      icon: markRaw(QuestionFilled),
      children: [
        {
          path: '/aftersale/list',
          title: '售后处理',
          show: true,
        },
      ],
    },
    {
      path: '/marketing',
      title: '营销中心',
      show: true,
      icon: markRaw(Ticket),
      children: [
        {
          path: '/marketing/coupon',
          title: '售后处理',
          show: true,
        },
        {
          path: '/marketing/snapup',
          title: '限时抢购',
          show: true,
        },
        {
          path: '/marketing/group',
          title: '拼团抢购',
          show: true,
        },
      ],
    },
    {
      path: '/cps',
      title: '分销管理',
      show: true,
      icon: markRaw(Promotion),
    },
    {
      path: '/money',
      title: '资金结算',
      show: true,
      icon: markRaw(WalletFilled),
      children: [
        {
          path: '/money/main',
          title: '账户资产',
          show: true,
        },
        {
          path: '/money/manage',
          title: '流水与账单',
          show: true,
        },
      ],
    },
    {
      path: '/statistics',
      title: '店铺数据',
      show: true,
      icon: markRaw(TrendCharts),
      children: [
        {
          path: '/statistics/shop',
          title: '经营概况',
          show: true,
        },
        {
          path: '/statistics/product',
          title: '商品数据',
          show: true,
        },
        {
          path: '/statistics/scene',
          title: '来源数据',
          show: true,
        },
      ],
    },
  ]);
