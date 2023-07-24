import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    white: "#fff",
    black: "#222",
    blue: "#0077d0",
    deepBlue: "#0050a0",
    lightGray: "#c2c2c2",
    gray: "#767676"
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const MIXINS = {};

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};