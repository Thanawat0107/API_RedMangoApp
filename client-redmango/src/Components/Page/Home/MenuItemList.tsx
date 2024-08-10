import React, { useEffect, useState } from "react";
import { menuItemModel } from "../../../models";
import MenuItemCard from "./MenuItemCard";

type Props = {};

export default function MenuItemList({}: Props) {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch("http://localhost:5055/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      });
  }, []);

  return (
    <div className="container row">
      {menuItems.length > 0 && menuItems.map((menuItem, index) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}
