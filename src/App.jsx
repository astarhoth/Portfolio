import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Header from "./contents/header.jsx";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}