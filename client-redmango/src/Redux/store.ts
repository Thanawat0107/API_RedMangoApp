import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./slice/menuItemSlice";
import { menuItemApi, shoppingCartApi } from "../Apis";
import { shoppingCartReducer } from "./slice/shoppingCartSlice";

const store = configureStore({
  reducer: {
    menuItemStore: menuItemReducer,
    shoppingCartStore: shoppingCartReducer,
    [menuItemApi.reducerPath]: menuItemApi.reducer,
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(menuItemApi.middleware)
      .concat(shoppingCartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
