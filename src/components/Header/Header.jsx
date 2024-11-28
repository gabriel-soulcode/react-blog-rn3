import { Link } from "react-router-dom";
import { logout } from "../../firebase/authentication";

function Header() {
    return (
        <header>
            <h1>React Blog</h1>
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
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <button onClick={() => logout()}>
                        Sair
                    </button>
                </li>
            </ul>
        </header>
    );
}

export default Header;