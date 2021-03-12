// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// const state = {
//   products: [
//     {
//       "id": 1,
//       "title": "หมวกแฟชั่น จากเรื่อง Kimetsu no Yaiba ",
//       "price": 580,
//       "imgUrl": "https://dj.lnwfile.com/_/dj/_raw/tw/iq/ux.jpg"
//     },
//     {
//       "id": 2,
//       "title": "เสื้อคลุมฮับบิ จากเรื่อง Kimetsu no Yaiba",
//       "price": 950,
//       "imgUrl": "https://dj.lnwfile.com/_/dj/_raw/t2/0l/y9.jpg"
//     },
//     {
//       "id": 3,
//       "title": "Wristband จากเรื่อง Kimetsu no Yaiba ",
//       "price": 380,
//       "imgUrl": "https://dj.lnwfile.com/_/dj/_raw/sb/cw/ke.jpg"
//     },
//     {
//       "id": 4,
//       "title": "เข็มกลัด พร้อมจี้ จากเรื่อง Kimetsu no Yaiba",
//       "price": 580,
//       "imgUrl": "https://dj.lnwfile.com/_/dj/_raw/cl/8s/y5.jpg"
//     },
//     {
//       "id": 5,
//       "title": "ดาบเหล็กไร้คม จากเรื่อง Kimetsu no Yaiba",
//       "price": 1890,
//       "imgUrl": "https://dj.lnwfile.com/_/dj/_raw/q8/2w/z6.jpg"
//     },
//     {
//       "id": 6,
//       "title": "เคสมือถือจากเรื่องKimetsu no Yaiba",
//       "price": 480,
//       "imgUrl": "https://dj.lnwfile.com/_/dj/_raw/wd/i6/yy.jpg"
//     }
//   ]
//   , 
//   cart: [],
// };

// const getters = {
//   products: (state) => state.products,
//   cart: (state) => state.cart,
// };

// const actions = {
//   getProducts({ commit }) {
//     commit("getProductData");
//   },
//   addItemToCart({ commit }, item) {
//     commit("addToCart", item);
//   },
//   removeItemFromCart({ commit }, id) {
//     commit("removeFromCart", id);
//   },
//   addQty({ commit }, id) {
//     commit("addQty", id);
//   },
//   reduceQty({ commit }, id) {
//     commit("reduceQty", id);
//   },
//   emptyCart({ commit }) {
//     commit("emptyCart");
//   }
// };
// const mutations = {
//   addToCart(state, item) {
//     const productInCart = state.cart.find((product) => product.id === item.id);
//     if (!productInCart) {
//       state.cart.push({ ...item, qty: 1 });
//     } else {
//       productInCart.qty++;
//     }
//   },
//   removeFromCart(state, id) {
//     state.cart = state.cart.filter((item) => item.id !== id);
//   },
//   addQty(state, id) {
//     const productInCart = state.cart.find((product) => product.id === id);
//     productInCart.qty++;
//   },
//   reduceQty(state, id) {
//     const productInCart = state.cart.find((product) => product.id === id);
//     if (productInCart.qty > 1) {
//       productInCart.qty--;
//     } else {
//       state.cart.splice(state.cart.indexOf(productInCart, 1));
//     }
//   },
//   emptyCart(state) {
//     state.cart = []
//   }
// };

// export default new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations,
// });