import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sac from "./pages/Sac/Sac";
import Sobre from "./pages/Sobre/Sobre";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import Signup from "./pages/Signup/Signup";
import { AuthProvider } from "./context/Auth";

function Hello() {
  return <h2>Olá meu amigo. Como vai?</h2>
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sac" element={<Sac />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

// Transpiler (Transpilador) -> Babel