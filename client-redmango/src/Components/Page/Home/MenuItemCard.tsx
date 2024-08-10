import React from "react";
import { menuItemModel } from "../../../models";

type Props = {
  menuItem: menuItemModel;
};

export default function MenuItemCard({ menuItem }: Props) {
  return (
    <>
      <div>{menuItem.id}</div>
      <div>{menuItem.name}</div>
      <div>{menuItem.price}</div>
      <div>{menuItem.description}</div>
      <div>{menuItem.category}</div>
      <img>{menuItem.image}</img>
    </>
  );
}
