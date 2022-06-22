import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../pages/admin/Admin.vue'
import Products from '../pages/admin/Products.vue'
import ProductCreate from '../pages/admin/ProductCreate.vue'
import ProductEdit from '../pages/admin/ProductEdit.vue'
import Main from '../pages/Main.vue'
import Kids from '../components/Kids.vue'
import Men from '../components/Men.vue'
import Women from '../components/Women.vue'
import Electronics from '../components/Electronics.vue'
import All from '../components/All.vue'
import Dashboard from '../pages/Dashboard.vue'


const routes = [
  {
    path: '/', 
    name:'Main',
    component: Main
  },
  {
 path: '/kids', 
    name:'Kids',
    component: Kids
  },

  {
    path: '/men', 
    name:'Men',
    component: Men
  },
  {
    path: '/women', 
    name:'Women',
    component: Women
  },
  {
    path: '/electronics', 
    name:'Electronics',
    component: Electronics
  },
  {
    path: '/all', 
    name:'All',
    component: All,
    props:true,
  },
  {
    path: '/admin',
    component: Admin,
    name: 'Admin',
    children: [
      { 
        path: '/admin/products', 
        component: Products,
        name: 'Products' 
      },
      { 
        path: '/admin/products/create', 
        component: ProductCreate,
        name: 'ProductCreate' 
      },
      { 
        path: '/admin/products/:id/edit', 
        component: ProductEdit,
        name: 'ProductEdit', 
        props: true 
      }
    ],
  },

  
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "Profile" */ '../pages/Home.vue')
      },
      {
        path: '/profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../pages/Profile.vue')
      },
      {
        path: '/users',
        component: () => import(/* webpackChunkName: "Users" */ '../pages/Users.vue')
      },
      
         {
        path: '/settings',
        component: () => import(/* webpackChunkName: "Settings" */ '../pages/Settings.vue')
      }
    ]
  }
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
