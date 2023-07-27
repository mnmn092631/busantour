import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, Logo, NavUl } from "src/styles/layout/header";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [bgWhite, setBgWhite] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const loc = useLocation().pathname;

  useEffect(() => {
    const scrollEvent = () => {
      if (loc !== "/") return;
      if (!headerRef.current) return;
      if (window.scrollY > headerRef.current?.clientHeight) {
        setBgWhite(() => true);
      } else {
        setBgWhite(() => false);
      }
    };

    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [loc]);

  return (
    <HeaderContainer $bgWhite={bgWhite} ref={headerRef} $isIndex={loc === "/"}>
      <Logo>
        <Link to="/">Busan Tour</Link>
      </Logo>
      <nav>
        <NavUl $bgWhite={bgWhite} $isIndex={loc === "/"}>
          <li>
            <Link to="/place">관광명소</Link>
          </li>
          <li>
            <Link to="/tour">테마여행</Link>
          </li>
          <li>
            <Link to="/food">맛집정보</Link>
          </li>
          <li>
            <Link to="/festival">지역축제</Link>
          </li>
        </NavUl>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
