import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
            //Dispatcher
  {
   path: '/login-dispatcher',
   name: 'LoginDispatcher',
    component: () => import('../views/dispatcher/login-dispatcher')
  },
  {
    path: '/dispatcher',
    name: 'AppDispatcher',
    component: () => import('../views/dispatcher/app-dispatcher'),
    children: [
      {
        path: 'home',
        name: 'HomeDispatcher',
        component: () => import('../views/dispatcher/home-dispatcher')
      },
      {
        path: 'package',
        name: 'PackageDispatcher',
        component: () => import('../components/dispatcher/updatePackageDispatcher'),
        children: [
          {
            path: '0',
            name: 'DispatcherState0',
            component: () => import('../components/dispatcher/state-package/packageNull')
          },
          {
            path: '1',
            name: 'DispatcherState1',
            component: () => import('../components/dispatcher/state-package/packageState1')
          },
          {
            path: '2',
            name: 'DispatcherState2',
            component: () => import('../components/dispatcher/state-package/packageState2')
          },
          {
            path: '3',
            name: 'DispatcherState3',
            component: () => import('../components/dispatcher/state-package/packageState3')
          }
        ]
      }
    ]
  },
          // Company
  {
    path: '/loginCompany',
    name: 'LoginCompany',
    component: () => import('../views/company/login-company')
  },
  {
    path: '/company',
    name: 'AppCompany',
    component: () => import('../views/company/app-company'),
    children: [
      {
        path: 'home',
        name: 'HomeCompany',
        component: () => import('../views/company/home-company')
      },
      {
        path: 'list-dispatcher',
        name: 'ListDispatcher',
        component: () => import('../components/company/add-dispatcher/listDispatcher')
      },
      {
        path: 'add-new-dispatcher',
        name: 'AddNewDispatcher',
        component: () => import('../components/company/add-dispatcher/addDispatcher')
      },
      {
        path: 'ship-terminal',
        name: 'ShipTerminal',
        component: () => import('../components/company/createTerminal/ship-terminal/myShipTerminal')
      },
      {
        path: 'terminal',
        name: 'Terminal',
        component: () => import('../components/company/createTerminal/terminal/myTerminal')
      },
      {
        path: 'terminal/create-terminal',
        name: 'CreateTerminal',
        component: () => import('../components/company/createTerminal/terminal/createTerminal')
      },
      {
        path: 'terminal/attach-terminal',
        name: 'AttachTerminal',
        component: () => import('../components/company/createTerminal/terminal/attach-terminal')
      },
      {
        path: 'find-dispatcher',
        name: 'FindDispatcher',
        component: () => import('../components/company/add-dispatcher/findDispatcher')
      },
      {
        path: 'add-dispatcher',
        name: 'AddDispatcher',
        component: () => import('../components/company/add-dispatcher/addDispatcher')
      }
    ]
  },
      //Customer
  {
    path: '/login-customer',
    name: 'LoginCustomer',
    component: () => import('../views/customer/LoginCustomer')
  },
  {
    path:'/customer',
    name: 'AppCustomer',
    component: () => import('../views/customer/appCustomer'),
    children:[
      {
        path:'home',
        name: 'HomeCustomer',
        component: ()=> import('@/views/customer/homeCustomer'),
      },
      {
        path:'packageinfo/',
        name: 'PackageInfo',
        component: ()=> import('@/views/customer/customerPackageInfo')
      },
      {
        path: `/tracking/2`,
        name: `InRoute`,
        component:()=>import('@/components/customer/package/tracking/inRouteState')
      },
      {
        path: `/tracking/3`,
        name: `InDestinyTerminal`,
        component:()=>import('@/components/customer/package/tracking/inDestinyTerminalState')
      },
      {
        path: `/tracking/1`,
        name: `Waiting`,
        component:()=>import('@/components/customer/package/tracking/waitingState')
      },
      {
        path: `mypackages`,
        name: `MyPackages`,
        component: ()=> import('@/views/customer/myPackages')
      },
      {
        path: `chat`,
        name: `Chat`,
        component: () => import('../components/customer/chat/chat')
      },
      {
        path: '/customer/newpackage/:OriginId/:DestinyId',
        name: 'NewPackage',
        component: () => import('../components/customer/package/add/newPackage')
      },
      {
        path: '/customer/findCompany',
        name: 'FindCompany',
        component: () => import('../components/customer/package/add/findCompany')
      },
      {
        path: '/customer/moreinfo/:id',
        name: 'MoreInfo',
        component: () => import('../components/customer/package/add/moreInfo.vue')
      }
    ]
  },
  {
    path: '/login-dealer',
    name: 'LoginDealer',
    component: () => import('../views/dealer/login-dealer')
  },
  {
    path: '/dealer',
    name: 'AppDealer',
    component: () => import('../views/dealer/app-dealer'),
    children: [
      {
        path: 'home',
        name: 'HomeDealer',
        component: () => import('../views/dealer/home-dealer')
      },
      {
        path: 'package',
        name: 'PackageDealer',
        component: () => import('../components/dealer/updatePackageDealer')
      }
    ]
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../components/customer/chat/chat')
  },
  {
    path: '/company/findDispatcher/create',
    name: 'AddDispatcher',
    component: () => import('../components/company/add-dispatcher/addDispatcher')
  },
  {
    path: '/company/myShipTerminal',
    name: 'MyShipTerminal',
    component: () => import('../components/company/createTerminal/ship-terminal/myShipTerminal')
  },
  {
    path: '/company/myTerminal',
    name: 'MyTerminal',
    component: () => import('../components/company/createTerminal/terminal/myTerminal')
  },
  {
    path: '/company/myTerminal/create',
    name: 'CreateTerminal',
    component: () => import('../components/company/createTerminal/terminal/createTerminal')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/company/profile')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/company/login-company')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
