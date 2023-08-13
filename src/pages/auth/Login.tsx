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
  AuthInputMessage,
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
        if (!error.response) return;
        const { data } = error.response;
        console.log(error);
        // setFailedLoginMessage(data);
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
      <AuthForm onSubmit={e => postLogin(e)}>
        <AuthInput type="text" name="id" placeholder="ID" value={id} onChange={valueChange} required />
        {/* <AuthInputMessage>{failedLoginMessage?.slice(0, 2) === "ID" && failedLoginMessage}</AuthInputMessage> */}
        <AuthInput
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={password}
          onChange={valueChange}
          required
        />
        {/* <AuthInputMessage>{failedLoginMessage?.slice(0, 8) === "Password" && failedLoginMessage}</AuthInputMessage> */}
        <BtnContainer>
          <SignupBtn to="/signup">회원가입</SignupBtn>
          <AuthSubmit type="submit">Login</AuthSubmit>
        </BtnContainer>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Login;
