import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Employees from "./components/Employees";

function App() {
  return (
    <div>
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
