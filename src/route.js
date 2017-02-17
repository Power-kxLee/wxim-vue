let routerpage = [
  { 
    path: '/',
    name:"index",
    component:resolve => require(['./view/page/index/index.vue'], resolve)
  },
  { 
    path: '/detail',
    name:"My Order", 
    component:resolve => require(['./view/page/detail/index.vue'], resolve)
  },
  { 
    path: '/detail/more',
    name:"Order Details", 
    component: resolve => require(['./view/page/detail/more.vue'], resolve)
  },
  { 
    path: '/detail/message',
    name:"Message", 
    component: resolve => require(['./view/page/detail/message.vue'], resolve)
    
  },
  { 
    path: '/contact',
    name:"Setting",
    component: resolve => require(['./view/page/contact/index.vue'], resolve)
   
  },
  { 
    path: '/message',
    name:"Message Center", 
    component: resolve => require(['./view/page/Message/index.vue'], resolve)
    
  },
  { 
    path: '/message/more',
    name:"Message More", 
    component: resolve => require(['./view/page/Message/more.vue'], resolve)
    
  },
  { 
    path: '/coupons',
    name:"My Coupons", 
    component: resolve => require(['./view/page/coupons/index.vue'], resolve)
   
  },
  { 
    path: '/invite',
    name:"Invite", 
    component: resolve => require(['./view/page/invite/index.vue'], resolve)
    
  },
  { 
    path: '/wishlist',
    name:"My Wish List", 
    component: resolve => require(['./view/page/wishlist/index.vue'], resolve)
   
  },
  { 
    path: '/profile',
    name:"My Info", 
    component: resolve => require(['./view/page/profile/index.vue'], resolve)
   
  },
  { 
    path: '/password',
    name:"Password", 
    component: resolve => require(['./view/page/password.vue'], resolve)
    
  },
  { 
    path: '/account',
    name:"Account", 
    component: resolve => require(['./view/page/account.vue'], resolve)
    
  },
  { 
    path: '/blog',
    name:"Blog", 
    component: resolve => require(['./view/page/blog/index.vue'], resolve)
    
  },
  { 
    path: '/blog/more',
    name:"详情", 
    component: resolve => require(['./view/page/blog/more.vue'], resolve)
    
  },
  { 
    path: '/login',
    component: resolve => require(['./view/page/login.vue'], resolve)
   
  },
  { 
    path: '/register',
    component: resolve => require(['./view/page/register.vue'], resolve)
  
  },
  { 
    path: '/guidancepage',
    component:resolve => require(['./view/page/guidancePage.vue'], resolve)
    
  }
]

export default routerpage;