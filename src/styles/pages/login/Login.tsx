import React, { useState } from "react";
import apiService from "src/api";

const Login = () => {
  const [form, setForm] = useState({ id: "", password: "" });
  const { id, password } = form;

  const login = async () => {
    if (!id || !password) return;

    try {
      const response = await apiService.loginService.login({ id, password });
    } catch (error) {
      console.error(error);
    }
  };

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>로그인</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          login();
        }}
      >
        <input type="text" name="id" placeholder="ID" value={id} onChange={valueChange} />
        <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={valueChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
