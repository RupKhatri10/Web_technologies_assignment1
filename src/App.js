import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/Nav";
import { HomePage } from "./components/HomePage";
import { Account } from "./components/Account";
import { Routes, Route, Outlet } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
