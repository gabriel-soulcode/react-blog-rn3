import "./style.css";

function UserCard(props) {

    const carregando = false;

    if (carregando) {
        return (
            <article className="user-card">
                <p>Carregando...</p>
            </article>
        );
    }

    return (
        <article className="user-card">
            <img src={props.avatar} alt="Foto de Perfil" width={300} />
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade} anos</p>
            <p>Ocupação: {props.ocup ? props.ocup : "Não definida"}</p>
            <p>Salário: {props.idade * 1000}</p>
        </article>
    );
}

export default UserCard;

// props -> propriedades
// se isso ? então isso : ou isso;