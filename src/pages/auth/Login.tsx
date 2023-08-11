import React, { useEffect, useState } from "react";
import apiService from "api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/auth";
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

const Login = () => {
  const [form, setForm] = useState({ id: "", password: "" });
  const { id, password } = form;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [failedLoginMessage, setFailedLoginMessage] = useState<string>("");

  const postLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password) return;

    try {
      const { data, status }: { data: string; status: number } = await apiService.authService.login({
        username: id,
        password,
      });
      if (status === 200) {
        dispatch(login(id, data));
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.response) return;
        const { data } = error.response;
        setFailedLoginMessage(data);
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
        <AuthInputMessage>{failedLoginMessage?.slice(0, 2) === "ID" && failedLoginMessage}</AuthInputMessage>
        <AuthInput
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={password}
          onChange={valueChange}
          required
        />
        <AuthInputMessage>{failedLoginMessage?.slice(0, 8) === "Password" && failedLoginMessage}</AuthInputMessage>
        <BtnContainer>
          <SignupBtn to="/signup">회원가입</SignupBtn>
          <AuthSubmit type="submit">Login</AuthSubmit>
        </BtnContainer>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Login;
