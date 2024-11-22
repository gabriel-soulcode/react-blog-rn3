import { useState } from "react";
import "./style.css";
import Titulo from "../Titulo/Titulo";

function Post(props) {

    const [curtidas, setCurtidas] = useState(0); // [estado, funcao modificadora]
    const [carregando, setCarregando] = useState(true);
    const [descurtidas, setDescurtidas] = useState(0);

    function adicionarCurtida() {
        setCurtidas(curtidas + 1);
    }

    setTimeout(() => {
        setCarregando(false);
    }, 3000);

    if (carregando) {
        return (
            <div className="post">
                <p>Carregando...</p>
            </div>
        );
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
                setDescurtidas(descurtidas+1);
            }}>
                Descurtidas: {descurtidas}
            </button>

            <button onClick={() => {
                window.alert(props.conteudo);
            }}>
                Detalhes
            </button>

            {curtidas > 10 ? <p>Post Popular!</p> : null}
        </div>
    );
}

export default Post;