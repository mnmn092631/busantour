import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, LoginBtn, Logo, LogoutBtn, NavUl } from "styles/layout/header";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { logout } from "store/auth";

const Header = () => {
  const [bgWhite, setBgWhite] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const loc = useLocation().pathname;
  const isLoginPage = loc === "/login" || loc === "/signup";
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollEvent = () => {
      if (isLoginPage) return;
      if (!headerRef.current) return;

      const clientHeight = headerRef.current.clientHeight;
      if (window.scrollY > clientHeight) setBgWhite(() => true);
      else setBgWhite(() => false);
    };

    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [isLoginPage]);

  return (
    <HeaderContainer $bgWhite={bgWhite} ref={headerRef} $isLoginPage={isLoginPage}>
      <Logo>
        <Link to="/">Busan Tour</Link>
      </Logo>
      <nav>
        <NavUl $bgWhite={bgWhite} $isLoginPage={isLoginPage}>
          <li>
            <Link to="/place">관광명소</Link>
          </li>
          {/* <li>
            <Link to="/tour">테마여행</Link>
          </li> */}
          <li>
            <Link to="/food">맛집정보</Link>
          </li>
          <li>
            <Link to="/festival">지역축제</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <LogoutBtn onClick={() => dispatch(logout())}>Log out</LogoutBtn>
            ) : (
              <LoginBtn to="/login">Log in</LoginBtn>
            )}
          </li>
        </NavUl>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
