import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { theme } from "./styles/theme";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Places from "pages/subpage/Places";
import Tour from "pages/subpage/Tour";
import Foods from "pages/subpage/Foods";
import Festival from "pages/subpage/Festival";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "store";
import Modal from "components/Modal";

function App() {
  const store = useStore();

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ScrollToTop />
        <Modal />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/place" element={<Places />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/food" element={<Foods />} />
            <Route path="/festival" element={<Festival />}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
