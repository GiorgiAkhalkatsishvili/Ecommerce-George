import { createSlice } from '@reduxjs/toolkit';
import person1 from '../assets/images/person1.png'
import person2 from '../assets/images/person2.png'
import person3 from '../assets/images/person3.png'
import person4 from '../assets/images/person4.png'
import person5 from '../assets/images/person5.png'
import person6 from '../assets/images/person6.png'
import person7 from '../assets/images/person7.png'
import person8 from '../assets/images/person8.png'
import seller1 from '../assets/images/seller1.png'
import seller2 from '../assets/images/seller2.png'
import seller3 from '../assets/images/seller3.png'
import seller4 from '../assets/images/seller4.png'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
    { id: 1, img: person1, price: 19.99, title: "Product 1" },
    { id: 2, img: person2, price: 29.99, title: "Product 2" },
    { id: 3, img:person3, price: 15.99, title: "Product 3" },
    { id: 4, img:person4, price: 45.99, title: "Product 4" },
    { id: 5, img: person5, price: 25.99, title: "Product 5" },
    { id: 6, img: person6, price: 40.99, title: "Product 7" },
    { id: 7, img: person7, price: 27.99, title: "Product 7" },
    { id: 8, img: person8, price: 59.99, title: "Product 8" }
    ],
    SecondProductsArray: [
      { id: 9, img: seller1, price: 21.99, title: "Product 9" },
      { id: 10, img: seller2, price: 5.99, title: "Product 10" },
      { id: 11, img: seller3, price: 17.99, title: "Product 11" },
      { id: 12, img: seller4, price: 40.99, title: "Product 12" },
    ],
    cartItems: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addCartItems: (state, action) => {
      const exists = state.cartItems.some(item=>item.id === action.payload.id)
      if (!exists) {
        state.cartItems.push(action.payload)
      }
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(product => product.id !== action.payload)
    },
  }
});


export const { setProducts, addCartItems, removeProductFromCart } = productsSlice.actions;
export default productsSlice.reducer;
