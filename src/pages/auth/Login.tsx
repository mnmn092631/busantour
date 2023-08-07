import React, { useState } from "react";
import apiService from "api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/auth";
import { AuthForm, AuthInput, AuthSubmit, AuthWrapper, SignupBtn, BtnContainer } from "styles/subpage/auth";

const Login = () => {
  const [form, setForm] = useState({ id: "", password: "" });
  const { id, password } = form;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password) return;

    try {
      const { data, status }: { data: string; status: number } = await apiService.authService.login({ id, password });
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
    <AuthWrapper>
      <AuthForm onSubmit={e => postLogin(e)}>
        <AuthInput type="text" name="id" placeholder="ID" value={id} onChange={valueChange} />
        <AuthInput type="password" name="password" placeholder="PASSWORD" value={password} onChange={valueChange} />
        <BtnContainer>
          <SignupBtn to="/join">회원가입</SignupBtn>
          <AuthSubmit type="submit">Login</AuthSubmit>
        </BtnContainer>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Login;
