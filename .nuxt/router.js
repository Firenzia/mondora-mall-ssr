import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _744b1fb2 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages_cart_index" */))
const _21cec43c = () => interopDefault(import('..\\pages\\payment\\index.vue' /* webpackChunkName: "pages_payment_index" */))
const _62e86db3 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages_product_index" */))
const _0c799c81 = () => interopDefault(import('..\\pages\\store\\index.vue' /* webpackChunkName: "pages_store_index" */))
const _6fb74238 = () => interopDefault(import('..\\pages\\seller\\login\\index.vue' /* webpackChunkName: "pages_seller_login_index" */))
const _60b2b172 = () => interopDefault(import('..\\pages\\seller\\management.vue' /* webpackChunkName: "pages_seller_management" */))
const _26ee8182 = () => interopDefault(import('..\\pages\\seller\\management\\delivery\\service.vue' /* webpackChunkName: "pages_seller_management_delivery_service" */))
const _cf6692c8 = () => interopDefault(import('..\\pages\\seller\\management\\delivery\\shippment.vue' /* webpackChunkName: "pages_seller_management_delivery_shippment" */))
const _5825062b = () => interopDefault(import('..\\pages\\seller\\management\\product\\check.vue' /* webpackChunkName: "pages_seller_management_product_check" */))
const _6104281c = () => interopDefault(import('..\\pages\\seller\\management\\product\\publish.vue' /* webpackChunkName: "pages_seller_management_product_publish" */))
const _6472eeb3 = () => interopDefault(import('..\\pages\\seller\\management\\transaction\\comment.vue' /* webpackChunkName: "pages_seller_management_transaction_comment" */))
const _bc552570 = () => interopDefault(import('..\\pages\\seller\\management\\transaction\\deal.vue' /* webpackChunkName: "pages_seller_management_transaction_deal" */))
const _84ed6cf8 = () => interopDefault(import('..\\pages\\user\\login\\index.vue' /* webpackChunkName: "pages_user_login_index" */))
const _2848f852 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/cart",
      component: _744b1fb2,
      name: "cart"
    }, {
      path: "/payment",
      component: _21cec43c,
      name: "payment"
    }, {
      path: "/product",
      component: _62e86db3,
      name: "product"
    }, {
      path: "/store",
      component: _0c799c81,
      name: "store"
    }, {
      path: "/seller/login",
      component: _6fb74238,
      name: "seller-login"
    }, {
      path: "/seller/management",
      component: _60b2b172,
      name: "seller-management",
      children: [{
        path: "delivery/service",
        component: _26ee8182,
        name: "seller-management-delivery-service"
      }, {
        path: "delivery/shippment",
        component: _cf6692c8,
        name: "seller-management-delivery-shippment"
      }, {
        path: "product/check",
        component: _5825062b,
        name: "seller-management-product-check"
      }, {
        path: "product/publish",
        component: _6104281c,
        name: "seller-management-product-publish"
      }, {
        path: "transaction/comment",
        component: _6472eeb3,
        name: "seller-management-transaction-comment"
      }, {
        path: "transaction/deal",
        component: _bc552570,
        name: "seller-management-transaction-deal"
      }]
    }, {
      path: "/user/login",
      component: _84ed6cf8,
      name: "user-login"
    }, {
      path: "/",
      component: _2848f852,
      name: "index"
    }],

    fallback: false
  })
}
