import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { theme } from "./styles/theme";
import Place from "./pages/place/Place";
import Tour from "./pages/tour/Tour";
import Food from "./pages/food/Food";
import Festival from "./pages/festival/Festival";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/place" element={<Place />}></Route>
          <Route path="/tour" element={<Tour />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/festival" element={<Festival />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
