import React, { useState } from "react";
import apiService from "api";
import { AuthForm, AuthInput, AuthInputMessage, AuthSubmit, AuthTitle, AuthWrapper } from "styles/subpage/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({ id: "", password: "" });
  const { id, password } = form;
  const [isIDExist, setIsIDExist] = useState<boolean>(false);
  const navigate = useNavigate();

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !password) return;

    try {
      const { status } = await apiService.authService.signup({ username: id, password });
      if (status === 201) navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 409) {
          setIsIDExist(true);
          setForm({ id: "", password });
          return;
        }
      } else {
        console.error(error);
      }
    }

    setForm({ id: "", password: "" });
  };

  const validateInput = () => {
    if (id.length === 0) return;
    else if (!/^[a-z0-9]*$/.test(id)) return "ID는 영문 소문자, 숫자로만 이루어져야 합니다.";
    else if (id.length < 3 || id.length > 10) return "ID는 3자 이상 10자 이하여야 합니다.";
    else return;
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
          pattern="^[a-z0-9]*$"
          minLength={5}
          maxLength={15}
          required
        />
        <AuthInputMessage>{isIDExist ? "이미 존재하는 아이디입니다." : validateInput()}</AuthInputMessage>
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
