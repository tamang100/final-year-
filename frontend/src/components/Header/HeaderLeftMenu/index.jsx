import React from "react";
import NavigationText from "./NavigationText";
import BrandIcon from "./BrandIcon";

export default function HeaderLeftMenu() {
  return (
    <div className="header__container">
      <BrandIcon />
      <NavigationText text={"Home"} url="/" />
      <NavigationText text={"New Arrivals"} url="/newarrivals" />
      <NavigationText text={"All Products"} url="/shop" />
    </div>
  );
}
