import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: [],
      sale: false,
      products: [
        {
          id: 1,
          name: 'Khaki Suede Polish Work Boots',
          price: 149.99,
          category: 'women',
          sale: true,
          article: 'shoe',
          img: 'shoe1.png'
        },
        {
          id: 2,
          name: 'Camo Fang Backpack Jungle',
          price: 39.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'jacket1.png'
        },
        {
          id: 3,
          name: 'Parka and Quilted Liner Jacket',
          price: 49.99,
          category: 'men',
          sale: true,
          article: 'jacket',
          img: 'jacket2.png'
        },
        {
          id: 4,
          name: 'Cotton Black Cap',
          price: 12.99,
          category: 'men',
          sale: true,
          article: 'hats',
          img: 'hat1.png'
        },
        {
          id: 5,
          name: 'Knit Sweater with Zips',
          price: 29.99,
          category: 'women',
          sale: false,
          article: 'sweater',
          img: 'sweater1.png'
        },
        {
          id: 6,
          name: 'Long Linen-blend Shirt',
          price: 18.99,
          category: 'men',
          sale: false,
          article: 'shirt',
          img: 'shirt1.png'
        },
        {
          id: 7,
          name: 'Knit Orange Sweater',
          price: 28.99,
          category: 'men',
          sale: false,
          article: 'sweater',
          img: 'sweater2.png'
        },
        {
          id: 8,
          name: 'Cotton Band-collar Blouse',
          price: 49.99,
          category: 'men',
          sale: false,
          article: 'shirt',
          img: 'shirt2.png'
        },
        {
          id: 9,
          name: 'Camo Fang Backpack Jungle',
          price: 59.99,
          category: 'women',
          sale: true,
          article: 'jacket',
          img: 'jacket3.png'
        },
        {
          id: 10,
          name: 'Golden Pilot Jacket',
          price: 129.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'jacket4.png'
        },
        {
          id: 11,
          name: 'Spotted Patterned Sweater',
          price: 80.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'sweater4.png'
        },
        {
          id: 12,
          name: 'Double Knit Sweater',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'jacket',
          img: 'sweater5.png'
        }
      ]
    },
    getters: {
      women: state => filter(state.products, 'category', 'women'),
      men: state => filter(state.products, 'category', 'men'),
      sale: state => filter(state.products, 'sale', true),
      cartTotal: state =>
        state.cart.reduce((sum, product) => sum + product.qty, 0)
    },
    mutations: {
      switchSale: state => {
        state.sale = !state.sale
      },
      addItem (state, payload) {
        const productInCart = state.cart.find(
          product => product.id === payload.id
        )
        if (productInCart) {
          productInCart.qty = productInCart.qty + 1
          return
        }
        const product = { ...payload, qty: 1 }
        state.cart.push(product)
      },
      removeCartItem (state, payload) {
        const productInCart = state.cart.find(
          product => product.id === payload.id
        )
        if (productInCart && productInCart.qty > 1) {
          productInCart.qty = productInCart.qty - 1
          return
        }
        state.cart = state.cart.filter(product => product.id !== payload.id)
      },
      clearCartCount (state) {
        state.cartTotal = 0
      },
      clearCartContents (state) {
        state.cart = []
      }
    }
  })
}

export default createStore

// helper
const filter = (array, key, value) => array.filter(item => item[key] === value)
