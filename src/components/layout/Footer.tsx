import React from "react";
import { Copyright, FLogo, FNav, FooterContainer, FooterHeader, SocialIcons } from "src/styles/layout/footer";
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <FLogo>Busan Tour</FLogo>
        <SocialIcons>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillYoutube />
        </SocialIcons>
      </FooterHeader>
      <FNav>
        <li>개인정보처리방침</li>
        <li>저작권보호정책</li>
        <li>약관</li>
        <li>뷰어다운로드</li>
      </FNav>
      <Copyright>©Busan Tour, ALL RIGHTS RESERVED.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
