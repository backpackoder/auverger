import React from "react";
import "./App.css";

// Components
import { Header } from "./components/header/Header";
import { Parts } from "./components/parts/Parts";
import { BookBtn } from "./components/BookBtn";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Parts />
      <BookBtn />
      <Footer />
    </>
  );
}

export default App;
