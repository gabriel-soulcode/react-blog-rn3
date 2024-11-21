import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function Hello() {
  return <h2>Olá meu amigo. Como vai?</h2>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

// Transpiler (Transpilador) -> Babel