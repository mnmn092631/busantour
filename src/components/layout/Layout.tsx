import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LayoutContainer, Logo, NavUl } from "./style";

const Layout = () => {
  const [bgWhite, setBgWhite] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadElement>(null);

  const scrollEvent = () => {
    if (!headerRef.current) return;
    if (window.scrollY > headerRef.current?.clientHeight) {
      setBgWhite(() => true);
    } else {
      setBgWhite(() => false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <>
      <LayoutContainer $bgWhite={bgWhite} ref={headerRef}>
        <Logo>
          <Link to="/">Busan Tour</Link>
        </Logo>
        <nav>
          <NavUl $bgWhite={bgWhite}>
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
