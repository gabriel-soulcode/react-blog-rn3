import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";
import { login, loginGoogle } from "../../firebase/authentication";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

function Login() {

    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const { setAutenticado } = useAuth();

    async function enviarFormulario({ email, senha }) {
        try {
            await login(email, senha);
            setAutenticado(true);
            navigate("/");
        }
        catch (erro) {
            if (erro.code == "auth/invalid-credential") {
                window.alert("Email ou Senha inválidos.");
            } else {
                window.alert("Algo deu errado.");
            }
            console.error(erro);
        }
    }

    async function entrarComGoogle() {
        try {
            await loginGoogle();
            setAutenticado(true);
            navigate("/");
        } catch(erro) {
            console.error(erro);
            window.alert("Algo deu errado.")
        }
    }

    return (
        <div>
            <Header />
            <h1>Login</h1>

            <form onSubmit={handleSubmit(enviarFormulario)}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" {...register("email", {
                        required: true,
                        minLength: 10,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                    })} autoComplete="off" />
                </div>

                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" {...register("senha", {
                        required: true,
                        minLength: 6,
                        maxLength: 15
                    })} />
                </div>

                <button>
                    Entrar
                </button>

                <button type="button" onClick={entrarComGoogle}>
                    Entrar com Google
                </button>
            </form>
        </div>
    );
}

export default Login;