import React, { useEffect, useState } from "react";
import apiService from "api";
import {
  AuthForm,
  AuthInput,
  AuthSubmit,
  AuthWrapper,
  SignupBtn,
  BtnContainer,
  AuthTitle,
  FailedMessage,
  AuthLabel,
} from "styles/subpage/auth";
import axios from "axios";
import cookieMethod from "common/cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ id: "", password: "" });
  const { id, password } = form;
  const navigate = useNavigate();
  const [failedLoginMessage, setFailedLoginMessage] = useState<string>("");

  const postLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password) return;

    try {
      const response = await apiService.authService.login({
        username: id,
        password,
      });

      const token = response.headers.authorization.split(" ")[1];

      const decodedUserInfo: { username: string; exp: number } = jwtDecode(token);
      const expires = new Date(decodedUserInfo.exp * 1000);

      cookieMethod.setCookie("accessToken", token, { path: "/", expires });
      localStorage.setItem("userInfo", JSON.stringify(decodedUserInfo.username));
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setFailedLoginMessage("로그인에 실패하였습니다.");
      } else {
        console.error(error);
      }
    }

    setForm({ id: "", password: "" });
  };

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const { id, password } = form;
    if (failedLoginMessage && (id.length !== 0 || password.length !== 0)) {
      setFailedLoginMessage("");
    }
  }, [failedLoginMessage, form]);

  return (
    <AuthWrapper>
      <AuthTitle>로그인</AuthTitle>
      <FailedMessage>{failedLoginMessage}</FailedMessage>
      <AuthForm onSubmit={e => postLogin(e)}>
        <AuthLabel htmlFor="id">아이디</AuthLabel>
        <AuthInput type="text" name="id" id="id" value={id} onChange={valueChange} required />
        <AuthLabel htmlFor="password">비밀번호</AuthLabel>
        <AuthInput type="password" name="password" id="password" value={password} onChange={valueChange} required />
        <BtnContainer>
          <SignupBtn to="/signup">회원가입</SignupBtn>
          <AuthSubmit type="submit">Login</AuthSubmit>
        </BtnContainer>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Login;
