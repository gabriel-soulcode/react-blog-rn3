import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Perfil do Usuário</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Usuários</Link>
                </li>
                <li>
                    <Link to="/sac">SAC</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;