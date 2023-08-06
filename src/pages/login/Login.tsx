import React, { useState } from "react";
import apiService from "api";
import { BtnContainer, JoinBtn, LoginForm, LoginInput, LoginSubmit, LoginWrapper } from "styles/subpage/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/auth";

const Login = () => {
  const [form, setForm] = useState({ id: "", password: "" });
  const { id, password } = form;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password) return;

    try {
      const { data, status }: { data: string; status: number } = await apiService.loginService.login({ id, password });
      if (status === 200) {
        dispatch(login(id, data));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }

    setForm({ id: "", password: "" });
  };

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={e => postLogin(e)}>
        <LoginInput type="text" name="id" placeholder="ID" value={id} onChange={valueChange} />
        <LoginInput type="password" name="password" placeholder="PASSWORD" value={password} onChange={valueChange} />
        <BtnContainer>
          <JoinBtn to="/join">회원가입</JoinBtn>
          <LoginSubmit type="submit">Login</LoginSubmit>
        </BtnContainer>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
