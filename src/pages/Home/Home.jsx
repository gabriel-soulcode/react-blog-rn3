import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { buscarPst, salvarPst } from "../../firebase/firestore";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/Auth";
import { Navigate } from "react-router-dom";


function FormPost({ buscarPosts }) {

    const { handleSubmit, register, reset } = useForm();

    async function salvarPost(dados) {
        await salvarPst(dados);
        buscarPosts();
        reset();
    } 

    return (
        <form onSubmit={handleSubmit(salvarPost)}>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" id="titulo" {...register("titulo")} />
            </div>
            <div>
                <label htmlFor="conteudo">Conteudo</label>
                <input type="text" id="conteudo" {...register("conteudo")} />
            </div>
            <div>
                <label htmlFor="autor">Autor</label>
                <input type="text" id="autor" {...register("autor")} />
            </div>
            <div>
                <label htmlFor="imagem">Imagem</label>
                <input type="text" id="imagem" {...register("imagem")} />
            </div>
            <button>Postar</button>
        </form>
    )
}


function Home() {

    const [posts, setPosts] = useState([]);
    const { autenticado } = useAuth();

    async function buscarPosts() {
        const posts = await buscarPst()
        setPosts(posts);
    }

    useEffect(() => {
        buscarPosts();
    }, []);

    // bloqueador
    if (!autenticado) return <Navigate to="/login" />;

    return (
        <div>
            <Header />

            <h1>Home</h1>

            <FormPost buscarPosts={buscarPosts} />

            {posts.map(post => {
                return <Post {...post} key={post.id} buscarPosts={buscarPosts} />
            })}

            <Footer />
        </div>
    )
}

export default Home;