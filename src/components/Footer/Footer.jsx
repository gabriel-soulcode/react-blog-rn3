import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="py-3 mt-4 bg-dark" data-bs-theme="dark">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/users" className="nav-link px-2 text-body-secondary">Usuários</Link>
                </li>
                <li class="nav-item">
                    <Link to="/sac" className="nav-link px-2 text-body-secondary">SAC</Link>
                </li>
                <li class="nav-item">
                    <Link to="/sobre" className="nav-link px-2 text-body-secondary">Sobre</Link>
                </li>
            </ul>
            <p class="text-center text-body-secondary">Criado por <strong>Gabriel Braga</strong></p>
        </footer>
    );
}

export default Footer;