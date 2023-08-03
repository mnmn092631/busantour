import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { theme } from "./styles/theme";
import Places from "./pages/place/Places";
import Tour from "./pages/tour/Tour";
import Foods from "./pages/food/Foods";
import Festival from "./pages/festival/Festival";
import ScrollToTop from "./components/ScrollToTop";
import Place from "./pages/place/Place";
import Login from "./styles/pages/login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/place" element={<Places />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/food" element={<Foods />} />
          <Route path="/festival" element={<Festival />}></Route>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
