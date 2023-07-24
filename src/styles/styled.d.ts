import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: "#fff";
      black: "#222";
      blue: "#0077d0";
      deepBlue: "#0050a0";
      lightGray: "#c2c2c2";
      gray: "#767676"
    };
  }
}