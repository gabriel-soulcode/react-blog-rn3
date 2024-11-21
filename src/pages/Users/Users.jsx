import UserCard from "../../components/UserCard/UserCard";
import imgJoao from "../../assets/joao.jpg";
import imgMaria from "../../assets/maria.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Users() {
    return (
        <div>
            <Header />
            <h1>Lista de Usuários</h1>
            <UserCard avatar={imgMaria} nome="Maria" idade={30} />
            <UserCard avatar={imgJoao} nome="João" idade={45} ocup="Engenheiro Civil" />
            <Footer />
        </div>
    );
}

export default Users;