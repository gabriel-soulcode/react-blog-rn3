import Header from "./components/Header/Header"
import UserCard from "./components/UserCard/UserCard"
import Footer from "./components/Footer/Footer"

function Hello() {
  return <h2>Olá meu amigo. Como vai?</h2>
}

function App() {
  return (
    <>
      <Header />
      <UserCard />
      <UserCard />
      <Footer />
    </>
  )
}

export default App

// Transpiler (Transpilador) -> Babel