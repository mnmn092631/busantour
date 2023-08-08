import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "styles/theme";

export const AuthWrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthTitle = styled.h1`
  color: ${theme.color.deepBlue};
  font-weight: 600;
  font-size: ${theme.fontSize.xl};
  margin-bottom: 15px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthInput = styled.input`
  width: 250px;
  margin-bottom: 10px;
  padding: 5px;
  border-bottom: 3px solid ${theme.color.deepBlue};
  transition: all 250ms ease-in-out;

  &:focus {
    border-bottom-color: ${theme.color.lightBlue};
    transition: all 250ms ease-in-out;
  }

  &::placeholder {
    color: ${theme.color.lightGray};
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SignupBtn = styled(Link)`
  padding: 10px 10px;
  color: ${theme.color.deepBlue};
  border-bottom: 2px solid ${theme.color.deepBlue};
  transition: all 250ms ease-in-out;

  &:hover {
    color: ${theme.color.lightBlue};
    border-bottom-color: ${theme.color.lightBlue};
    transition: all 250ms ease-in-out;
  }
`;

export const AuthSubmit = styled.button`
  background-color: ${theme.color.deepBlue};
  padding: 10px 15px;
  border-radius: 5px;
  color: ${theme.color.white};
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: ${theme.color.lightBlue};
    transition: all 250ms ease-in-out;
  }
`;