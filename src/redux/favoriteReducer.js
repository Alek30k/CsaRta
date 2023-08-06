import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cartItems: localStorage.getItem("cartItems")
  //   ? JSON.parse(localStorage.getItem("cartItems"))
  //   : [],
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const existingIndex = state.favorite.findIndex(
        (item) => item._id === action.payload._id
      );

      console.log("existingIndex");

      if (existingIndex >= 0) {
        state.favorite[existingIndex] = {
          ...state.favorite[existingIndex],
          //   cartQuantity: state.favorite[existingIndex].cartQuantity + 1,
        };
        // toast.info("Aumentó la cantidad del producto!", {
        //   position: "bottom-left",
        // });
      } else {
        let tempProductItem = { ...action.payload };
        state.favorite.push(tempProductItem);
        // toast.success("Producto añadido al carrito!", {
        //   position: "bottom-left",
        // });
      }
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
