import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const existingItems = state.cartItems.find(
        (item) => item._id === actions.payload._id
      );
      if (!existingItems) {
        state.cartItems.push(actions.payload);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item Stored in cart",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Item aldready in cart!",
        });
      }
    },
    removeFromCart: (state, actions) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== actions.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
