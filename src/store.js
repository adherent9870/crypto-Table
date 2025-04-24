import { configureStore } from "@reduxjs/toolkit";
import assetsReducer from "./assetSlice";

const store = configureStore({
  reducer: {
    assets: assetsReducer,
  },
});

export default store;
