import React from "react";
import "./App.css";
import Header from "./components/Header";
import Parts from "./components/Parts";
import Footer from "./components/Footer";
import BookBtn from "./components/BookBtn";

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
