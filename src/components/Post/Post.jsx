import { useState } from "react";
import "./style.css";
import Titulo from "../Titulo/Titulo";
import { editarPst, removerPst } from "../../firebase/firestore";
import { Button, Card } from "react-bootstrap";

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

    function adicionarDescurtida() {
        setDescurtidas(descurtidas + 1);
    }

    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={props.imagem} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>{props.conteudo}</Card.Text>
                <p className="fw-bold">{props.autor}</p>
                
                <Button onClick={adicionarCurtida} variant="primary" size="sm">
                    Curtidas {curtidas}
                </Button>

                <Button onClick={adicionarDescurtida} variant="dark" size="sm">
                    Descurtidas {descurtidas}
                </Button>

                <Button onClick={removerPost} variant="danger" size="sm">Excluir</Button>
                <Button onClick={editarPost} variant="warning" size="sm">Editar</Button>
            </Card.Body>
        </Card>
    );
}

export default Post;