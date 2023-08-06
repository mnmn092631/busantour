import React, { useState } from "react";
import apiService from "api";
import { LoginForm, LoginInput, LoginSubmit, LoginWrapper } from "styles/subpage/login";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [form, setForm] = useState({ id: "", password: "", username: "" });
  const { id, username, password } = form;
  const navigate = useNavigate();

  const join = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password || !username) return;

    try {
      const { status } = await apiService.joinService.join({ id, username, password });
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
    <LoginWrapper>
      <LoginForm onSubmit={e => join(e)}>
        <LoginInput type="text" name="id" placeholder="ID" value={id} onChange={valueChange} />
        <LoginInput type="text" name="username" placeholder="USERNAME" value={username} onChange={valueChange} />
        <LoginInput type="password" name="password" placeholder="PASSWORD" value={password} onChange={valueChange} />
        <LoginSubmit type="submit">회원가입</LoginSubmit>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Join;
