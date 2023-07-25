import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LayoutContainer, Logo, NavUl } from "./style";

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Logo>Busan Tour</Logo>
        <nav>
          <NavUl>
            <li>
              <Link to="#">관광명소</Link>
            </li>
            <li>
              <Link to="#">테마여행</Link>
            </li>
            <li>
              <Link to="#">맛집정보</Link>
            </li>
            <li>
              <Link to="#">지역축제</Link>
            </li>
          </NavUl>
        </nav>
      </LayoutContainer>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
