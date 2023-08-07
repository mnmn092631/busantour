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
      xs: "0.75rem";
      sm: "0.875rem";
      base: "1rem";
      md: "1.125rem";
      lg: "1.25rem";
      xl: "1.5rem";
      xxl: "2rem";
      logo: "2.5rem";
    };
  }
}
