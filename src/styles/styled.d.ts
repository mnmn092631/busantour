import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: "#fff";
      black: "#222";
      blue: "#0077d0";
      deepBlue: "#0050a0";
      lightBlue: "#0593D2";
      lightGray: "#c2c2c2";
      gray: "#767676";
    };
    fontSize: {
      xs: "12px";
      sm: "14px";
      base: "16px";
      md: "18px";
      lg: "20px";
      xl: "24px";
      xxl: "32px";
      logo: "40px";
    };
  }
}
