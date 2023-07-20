import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "../Components/Header";
import ShowHeader from "../Components/ShowHeader";

function SharedLayout() {
  return (
    <>
      <ShowHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SharedLayout;
