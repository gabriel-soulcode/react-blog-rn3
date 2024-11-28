import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { usuarioLogado } from "../firebase/authentication";

const AuthContext = createContext();

// AuthProvider da permissão para acessar o contexto
function AuthProvider({ children }) {

    const [carregando, setCarregando] = useState(true);
    const [autenticado, setAutenticado] = useState(false);
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        usuarioLogado(usuario => {
            setUsuario(usuario);
            setAutenticado(!!usuario);
            setCarregando(false);
        });
    }, []);

    if (carregando) return <div>Carregando...</div>;

    return (
        <AuthContext.Provider value={{ autenticado, setAutenticado, usuario }}>
            {children}
        </AuthContext.Provider>
    );
}

// Permite acessar os estados e funções fornecidos pelo contexto
function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };