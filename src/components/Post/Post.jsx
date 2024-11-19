import { useState } from "react";
import "./style.css";
import Titulo from "../Titulo/Titulo";

function Post() {

    const [curtidas, setCurtidas] = useState(0); // [estado, funcao modificadora]
    const [carregando, setCarregando] = useState(true);

    function adicionarCurtida() {
        setCurtidas(curtidas + 1);
    }

    setTimeout(() => {
        setCarregando(false);
    }, 5000);

    if (carregando) {
        return (
            <div className="post">
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="post">
            <Titulo>SoulCode melhor editech gratuita.</Titulo>
            <Titulo>Prof Gabriel sabe mais <em>HTML</em> do que Português.</Titulo>
            <Titulo>Qualquer coisa</Titulo>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!
            </p>
            <button onClick={adicionarCurtida}>
                Curtidas: {curtidas}
            </button>
        </div>
    );
}

export default Post;