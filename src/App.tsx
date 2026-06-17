import { Categories } from "./componentes/Categories"
import { Gallery } from "./componentes/Gallery"
import { Header } from "./componentes/Header"
import { Hero } from "./componentes/Hero"

function App() {


  return (
    <>
      <Header></Header>

      <main className="py-10">
        <Hero></Hero>
        <Categories></Categories>
        <Gallery></Gallery>
      </main>
    </>
  )
}

export default App
