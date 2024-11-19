import Header from "./components/Header/Header"
import UserCard from "./components/UserCard/UserCard"
import Footer from "./components/Footer/Footer"
import imgJoao from "./assets/joao.jpg";
import imgMaria from "./assets/maria.jpg";
import Post from "./components/Post/Post";


function Hello() {
  return <h2>Olá meu amigo. Como vai?</h2>
}

function App() {
  return (
    <>
      <Header />
      <Post />
      <UserCard avatar={imgMaria} nome="Maria" idade={30} />
      <UserCard avatar={imgJoao} nome="João" idade={45} ocup="Engenheiro Civil" />
      <Footer />
    </>
  );
}

export default App

// Transpiler (Transpilador) -> Babel