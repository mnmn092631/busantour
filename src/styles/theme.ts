import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    white: "#fff",
    black: "#222",
    blue: "#0077d0",
    deepBlue: "#0050a0",
    lightBlue: "#0593D2",
    lightGray: "#c2c2c2",
    gray: "#767676",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    md: "18px",
    lg: "24px",
    xl: "24px",
    xxl: "32px",
    logo: "40px",
  },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const MIXINS = {};

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
