import { useForm } from "react-hook-form";
import { buscar, salvar } from "../../firebase/firestore";
import { useEffect, useState } from "react";

function Signup() {
    const [usuarios, setUsuarios] = useState([]);
    const { handleSubmit, register, reset } = useForm();

    async function salvarUsuario(dados) {
        await salvar(dados);
        reset();
        buscarUsuarios();
    }

    async function buscarUsuarios() {
        const usuarios = await buscar();
        setUsuarios(usuarios);
    }

    useEffect(() => {
        buscarUsuarios();
    }, []);

    return (
        <form onSubmit={handleSubmit(salvarUsuario)}>
            <h1>Cadastre-se</h1>

            <table border="2">
                <tbody>
                    {usuarios.map(us => (
                        <tr key={us.id}>
                            <td>{us.id}</td>
                            <td>{us.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

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

            <button>Criar</button>
        </form>
    );
}

export default Signup;