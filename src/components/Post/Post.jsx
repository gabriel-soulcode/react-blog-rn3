import { useState } from "react";
import "./style.css";
import Titulo from "../Titulo/Titulo";
import { editarPst, removerPst } from "../../firebase/firestore";

function Post(props) {

    const [curtidas, setCurtidas] = useState(0); // [estado, funcao modificadora]
    const [descurtidas, setDescurtidas] = useState(0);

    async function removerPost() {
        await removerPst(props.id);
        props.buscarPosts();
    }

    async function editarPost() {
        const titulo = window.prompt("Digite o tiulo", props.titulo);
        if (titulo) {
            await editarPst(props.id, { titulo });
            props.buscarPosts();
        }
    }

    function adicionarCurtida() {
        setCurtidas(curtidas + 1);
    }

    return (
        <div className="post">
            <Titulo>{props.titulo}</Titulo>

            <img src={props.imagem} alt="Publicação" width={400} />

            <p>{props.conteudo}</p>
            <p>
                <small>{props.autor}</small>
            </p>

            <button onClick={adicionarCurtida}>
                Curtidas: {curtidas}
            </button>

            <button onClick={() => {
                setDescurtidas(descurtidas + 1);
            }}>
                Descurtidas: {descurtidas}
            </button>

            <button onClick={() => {
                window.alert(props.conteudo);
            }}>
                Detalhes
            </button>

            <button onClick={removerPost}>
                Excluir
            </button>

            <button onClick={editarPost}>
                Editar
            </button>

            {curtidas > 10 ? <p>Post Popular!</p> : null}
        </div>
    );
}

export default Post;