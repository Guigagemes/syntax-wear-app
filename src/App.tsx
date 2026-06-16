import { Categories } from "./componentes/Categories"
import { Header } from "./componentes/Header"
import { Hero } from "./componentes/Hero"

function App() {


  return (
    <>
      <Header></Header>

      <main className="py-10">
        <Hero></Hero>
        <Categories></Categories>
      </main>
    </>
  )
}

export default App
