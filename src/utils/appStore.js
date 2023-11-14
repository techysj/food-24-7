const { configureStore } = require("@reduxjs/toolkit");
import cartStoreSlice from "./cartStoreSlice";
// import cartReducer from "./cartStoreSlice";

const appStore = configureStore({
  reducer: {
    cart: cartStoreSlice,
  },
});
export default appStore;
