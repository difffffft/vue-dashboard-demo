export default [
  {
    path: '/home',
    name: 'Home',
    component: import('@/views/Home'),
  },
  {
    path: '/goods/list',
    name: 'GoodsList',
    component: () => import('@/views/GoodsList'),
  },
  {
    path: '/goods/add',
    name: 'GoodsAdd',
    component: () => import('@/views/GoodsAdd'),
  },
  {
    path: '/store/setting',
    name: 'StoreSetting',
    component: () => import('@/views/StoreSetting'),
  },
  {
    path: '/store/category',
    name: 'StoreCategory',
    component: () => import('@/views/StoreCategory'),
  },
  {
    path: '/store/staff',
    name: 'StoreStaff',
    component: () => import('@/views/StoreStaff'),
  },
  {
    path: '/store/decoration',
    name: 'StoreDecoration',
    component: () => import('@/views/StoreDecoration'),
  },
  {
    path: '/store/announce',
    name: 'StoreAnnounce',
    component: () => import('@/views/StoreAnnounce'),
  },
  {
    path: '/order/list',
    name: 'OrderList',
    component: () => import('@/views/OrderList'),
  },
  {
    path: '/order/comment',
    name: 'OrderComment',
    component: () => import('@/views/OrderComment'),
  },
  {
    path: '/order/staff',
    name: 'OrderStaff',
    component: () => import('@/views/OrderStaff'),
  },
  {
    path: '/aftersale/list',
    name: 'AftersaleList',
    component: () => import('@/views/AftersaleList'),
  },
  {
    path: '/marketing/coupon',
    name: 'MarketingCoupon',
    component: () => import('@/views/MarketingCoupon'),
  },
  {
    path: '/marketing/snapup',
    name: 'MarketingSnapup',
    component: () => import('@/views/MarketingSnapup'),
  },
  {
    path: '/marketing/group',
    name: 'MarketingGroup',
    component: () => import('@/views/MarketingGroup'),
  },
  {
    path: '/cps',
    name: 'Cps',
    component: () => import('@/views/Cps'),
  },
  {
    path: '/money/main',
    name: 'MoneyMain',
    component: () => import('@/views/MoneyMain'),
  },
  {
    path: '/money/manage',
    name: 'MoneyManage',
    component: () => import('@/views/MoneyManage'),
  },
  {
    path: '/statistics/shop',
    name: 'StatisticsShop',
    component: () => import('@/views/StatisticsShop'),
  },
  {
    path: '/statistics/product',
    name: 'StatisticsProduct',
    component: () => import('@/views/StatisticsProduct'),
  },
  {
    path: '/statistics/scene',
    name: 'StatisticsScene',
    component: () => import('@/views/StatisticsScene'),
  },
];
