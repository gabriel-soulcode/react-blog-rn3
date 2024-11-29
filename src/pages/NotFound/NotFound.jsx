import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";

function NotFound() {
    return (
        <div>
            <Header />
            <Container>
                <h1>Página não encontrada.</h1>
                <Link to="/">Voltar para home.</Link>
            </Container>
            <Footer />
        </div>
    );
}

export default NotFound;