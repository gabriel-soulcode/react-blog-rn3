import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function NotFound() {
    return (
        <div>
            <Header />
            
            <h1>Página não encontrada.</h1>
            <Link to="/">Voltar para home.</Link>
            
            <Footer />
        </div>
    );
}

export default NotFound;