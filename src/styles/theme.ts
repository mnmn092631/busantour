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
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    md: "1.125rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xxl: "2rem",
    logo: "2.5rem",
  },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1281),
  tabletMax: customMediaQuery(1025),
  tabletMin: customMediaQuery(769),
  mobile: customMediaQuery(481),
};
