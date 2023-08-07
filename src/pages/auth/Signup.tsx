import React, { useState } from "react";
import apiService from "api";
import { AuthForm, AuthInput, AuthSubmit, AuthTitle, AuthWrapper } from "styles/subpage/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ id: "", password: "", username: "" });
  const { id, username, password } = form;
  const navigate = useNavigate();

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password || !username) return;

    try {
      const { status } = await apiService.authService.signup({ id, username, password });
      if (status === 200) navigate("/login");
    } catch (error) {
      console.error(error);
    }

    setForm({ id: "", password: "", username: "" });
  };

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <AuthWrapper>
      <AuthTitle>회원가입</AuthTitle>
      <AuthForm onSubmit={e => signup(e)}>
        <AuthInput type="text" name="id" placeholder="ID" value={id} onChange={valueChange} />
        <AuthInput type="text" name="username" placeholder="USERNAME" value={username} onChange={valueChange} />
        <AuthInput type="password" name="password" placeholder="PASSWORD" value={password} onChange={valueChange} />
        <AuthSubmit type="submit">회원가입</AuthSubmit>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Signup;
