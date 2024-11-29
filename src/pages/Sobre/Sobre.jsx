import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Sobre() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Header />
            <Container className="flex-grow-1">
                <h1>Sobre o Blog</h1>
                <p>
                    Idealizado pelo professor Gabriel. O objetivo deste blog é aprender React.js.
                </p>

                <h2>Pre-requisitos</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </Container>
            <Footer />
        </div>
    );
}

export default Sobre;