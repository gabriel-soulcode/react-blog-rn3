import { useState } from "react";

function Form() {
    const [nome, setNome] = useState(""); // estado

    function enviarFormulario() {
        window.alert("Formulário enviado.");
    }

    function lidarMundancaNome(event) {
        const valor = event.target.value;
        setNome(valor);
    }

    // debounce

    return (
        <form style={{ padding: "20px" }}>
            <p>{nome}</p>

            <label htmlFor="nome">Nome</label> <br />
            <input type="text" id="nome" onChange={lidarMundancaNome} /> <br />

            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" /> <br />

            <label htmlFor="mesagem">Mensagem</label> <br />
            <input type="text" id="mensagem" /> <br />

            <button type="button" onClick={enviarFormulario}>Enviar</button>
        </form>
    );
}

export default Form;