import Header from "./components/Header/Header"

function Hello() {
  return <h2>Olá meu amigo. Como vai?</h2>
}

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Hello />
      <Hello />
      <Hello />
      <Header />
    </>
  )
}

export default App

// Transpiler (Transpilador) -> Babel