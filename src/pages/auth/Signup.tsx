import React, { useState } from "react";
import apiService from "api";
import { AuthForm, AuthInput, AuthInputMessage, AuthSubmit, AuthTitle, AuthWrapper } from "styles/subpage/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({ id: "", password: "", username: "" });
  const { id, username, password } = form;
  const [isIDExist, setIsIDExist] = useState<boolean>(false);
  const navigate = useNavigate();

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password || !username) return;

    try {
      const { status } = await apiService.authService.signup({ id, username, password });
      if (status === 201) navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 409) {
          setIsIDExist(true);
          setForm({ id: "", password, username });
          return;
        }
      } else {
        console.error(error);
      }
    }

    setForm({ id: "", password: "", username: "" });
  };

  const validateInput = (fieldName: string) => {
    switch (fieldName) {
      case "id":
        if (id.length === 0) return;
        else if (!/^[a-zA-Z0-9]*$/.test(id)) return "ID는 영문 대소문자, 숫자로만 이루어져야 합니다.";
        else if (id.length < 5 || id.length > 15) return "ID는 5자 이상 15자 이하여야 합니다.";
        else return;
      case "username":
        if (username.length === 0) return;
        else if (!/^[a-zA-Z가-힣]*$/.test(username)) return "Username은 영문 대소문자, 한글로만 이루어져야 합니다.";
        else if (username.length < 5 || username.length > 15) return "Username은 5자 이상 15자 이하여야 합니다.";
        else return;
    }
  };

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (isIDExist && e.target.name === "id") setIsIDExist(false);
  };

  return (
    <AuthWrapper>
      <AuthTitle>회원가입</AuthTitle>
      <AuthForm onSubmit={e => signup(e)}>
        <AuthInput
          type="text"
          name="id"
          placeholder="ID"
          value={id}
          onChange={valueChange}
          pattern="^[a-zA-Z0-9]*$"
          minLength={5}
          maxLength={15}
          required
        />
        <AuthInputMessage>{isIDExist ? "이미 존재하는 아이디입니다." : validateInput("id")}</AuthInputMessage>
        <AuthInput
          type="text"
          name="username"
          placeholder="USERNAME"
          value={username}
          onChange={valueChange}
          pattern="^[a-zA-Z가-힣]*$"
          minLength={5}
          maxLength={15}
          required
        />
        <AuthInputMessage>{validateInput("username")}</AuthInputMessage>
        <AuthInput
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={password}
          onChange={valueChange}
          required
        />
        <AuthSubmit type="submit">회원가입</AuthSubmit>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Signup;
