import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";

function Login() {

    const { handleSubmit, register } = useForm();

    function enviarFormulario(dados) {
        console.log("Formulário enviado.");
        console.log(dados);
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
            </form>
        </div>
    );
}

export default Login;