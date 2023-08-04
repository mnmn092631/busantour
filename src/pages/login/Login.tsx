import React, { useState } from "react";
import apiService from "api";

const Login = () => {
  const [form, setForm] = useState({ id: "", password: "" });
  const { id, password } = form;

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!id || !password) return;
    e.preventDefault();

    try {
      const response = await apiService.loginService.login({ id, password });
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    setForm({ id: "", password: "" });
  };

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={e => login(e)}>
        <input type="text" name="id" placeholder="ID" value={id} onChange={valueChange} />
        <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={valueChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
