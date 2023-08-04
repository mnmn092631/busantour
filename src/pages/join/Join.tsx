import React, { useState } from "react";
import apiService from "api";

const Join = () => {
  const [form, setForm] = useState({ id: "", password: "", username: "" });
  const { id, username, password } = form;

  const join = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!id || !password || !username) return;
    e.preventDefault();

    try {
      const response = await apiService.joinService.join({ id, username, password });
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    setForm({ id: "", password: "", username: "" });
  };

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={e => join(e)}>
        <input type="text" name="id" placeholder="ID" value={id} onChange={valueChange} />
        <input type="text" name="username" placeholder="USERNAME" value={username} onChange={valueChange} />
        <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={valueChange} />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Join;
