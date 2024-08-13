import React from "react";
import { MenuItemList } from "../Components/Page/Home";
import { Banner } from "../Common";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container p-2">
        <MenuItemList />
      </div>
    </>
  );
}
