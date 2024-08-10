import React, {useState, useEffect} from "react";
import { Footer, Header } from "../Components/Layout";
import { menuItemModel } from "../models";

export default function App() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);


  useEffect(() => {
    fetch('http://localhost:5055/api/MenuItem')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      });
  }, []);

  return (
    <div>
      <Header />
      Main Component
      <Footer />
    </div>
  );
}
