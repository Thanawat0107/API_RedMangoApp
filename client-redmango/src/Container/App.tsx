import { Footer, Header } from "../Components/Layout";
import { Home, MenuItemDetails, NotFound, ShoppingCart } from "../Pages";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { setShoppingCart } from "../Redux/slice/shoppingCartSlice";

function App() {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetShoppingCartQuery(
    "f56f1d99-40fa-427c-a505-b7b85b0b84a9"
  );

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          ></Route>
            <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;