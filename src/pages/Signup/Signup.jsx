import { useForm } from "react-hook-form";
import { salvarUs } from "../../firebase/firestore";
import { cadastrar } from "../../firebase/authentication";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Button } from "react-bootstrap";

function Signup() {
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();

    async function salvarUsuario({ email, senha, nome }) {
        try {
            const usuario = await cadastrar(email, senha);
            await salvarUs({
                email, senha, nome,
                authId: usuario.uid
            });
            navigate("/login");
        } catch (erro) {
            window.alert("Algo deu errado.");
            console.error(erro);
        }
    }

    return (
        <div>
            <Header />
            <h1>Cadastre-se</h1>

            <form onSubmit={handleSubmit(salvarUsuario)}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" {...register("nome")} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" {...register("email")} />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" {...register("senha")} />
                </div>

                <Button type="submit">Criar</Button>
            </form>
        </div>
    );
}

export default Signup;

// CRUD
// C - Create
// R - Read
// U - Update
// D - Delete