import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

const post1 = {
    titulo: "SoulCode melhor editech gratuita.",
    autor: "Gabriel Braga",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus eveniet molestias quia dolore ex aut quod deleniti atque, ullam assumenda consequatur? Quia deleniti amet ratione eius soluta dolorum at!",
    imagem: "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

function Home() {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            <Post {...post1} />
            <Footer />
        </div>
    )
}

export default Home;