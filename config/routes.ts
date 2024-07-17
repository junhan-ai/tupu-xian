export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
    ],
  },
  // { path: '/welcome', icon: 'smile', component: './Welcome', name: '欢迎页' },
  { path: '/welcome1', icon: 'CodepenOutlined', component: './BenTi', name: '本体构建' },
  { path: '/welcome2', icon: 'ReadOutlined', component: './Welcome', name: '知识提取与融合' },
  { path: '/welcome3', icon: 'DotChartOutlined', component: './Welcome', name: '小样本实体识别和关系抽取' },

  {
    path: '/admin',
    icon: 'crown',
    name: '管理页',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/user' },
      { icon: 'table', path: '/admin/user', component: './Admin/User', name: '用户管理' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
