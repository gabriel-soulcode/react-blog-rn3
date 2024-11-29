import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { buscarPst, salvarPst } from "../../firebase/firestore";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/Auth";
import { Navigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";


function FormPost({ buscarPosts }) {

    const { handleSubmit, register, reset } = useForm();

    async function salvarPost(dados) {
        await salvarPst(dados);
        buscarPosts();
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(salvarPost)}>
            <Form.Group className="mb-3" controlId="titulo">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" {...register("titulo")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="conteudo">
                <Form.Label>Conteudo</Form.Label>
                <Form.Control type="text" {...register("conteudo")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="autor">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" {...register("autor")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imagem">
                <Form.Label>Imagem</Form.Label>
                <Form.Control type="text" {...register("imagem")} />
            </Form.Group>
            <Button type="submit">Postar</Button>
        </Form>
    );
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
            <Container>

                <h1>Home</h1>

                <FormPost buscarPosts={buscarPosts} />

                {posts.map(post => {
                    return <Post {...post} key={post.id} buscarPosts={buscarPosts} />
                })}

            </Container>
            <Footer />
        </div>
    )
}

export default Home;