import React, { useEffect, useRef, useState } from "react";
import { Hamburger, HeaderContainer, LoginBtn, HLogo, LogoutBtn, NavUl, Navbar } from "styles/layout/header";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { logout } from "store/auth";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bgWhite, setBgWhite] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const loc = useLocation().pathname;
  const isAuthPage = loc === "/login" || loc === "/signup";
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollEvent = () => {
      if (isAuthPage) return;
      if (!headerRef.current) return;

      const clientHeight = headerRef.current.clientHeight;
      if (window.scrollY > clientHeight) setBgWhite(() => true);
      else setBgWhite(() => false);
    };

    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [isAuthPage]);

  useEffect(() => {
    setIsOpen(false);
  }, [loc]);

  return (
    <HeaderContainer $bgWhite={bgWhite} ref={headerRef} $isAuthPage={isAuthPage} $isOpen={isOpen}>
      <HLogo>
        <Link to="/">Busan Tour</Link>
      </HLogo>
      <Navbar $isOpen={isOpen}>
        <NavUl $bgWhite={bgWhite} $isAuthPage={isAuthPage} $isOpen={isOpen}>
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
        {isLoggedIn ? (
          <LogoutBtn onClick={() => dispatch(logout())}>로그아웃</LogoutBtn>
        ) : (
          <LoginBtn to="/login">로그인/회원가입</LoginBtn>
        )}
      </Navbar>
      <Hamburger className="tablet-moblie-only" onClick={() => setIsOpen(!isOpen)} />
    </HeaderContainer>
  );
};

export default Header;
