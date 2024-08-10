import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./slice/menuItemSlice";

const store = configureStore({
  reducer: {
    menuItemStore: menuItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;