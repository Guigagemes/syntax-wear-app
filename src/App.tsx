
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./router-tree-gen"
import { CartPrvider } from "./contexts/CartProvider"

const router = createRouter ({routeTree})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function App() {


  return (
  <CartPrvider>
    <RouterProvider router={router} />
  </CartPrvider>
  );
//     <>
//       <Header></Header>

//       <main className="py-10">
//         <Hero></Hero>
//         <Categories></Categories>
//         <Gallery></Gallery>
//       </main>

//       <Footer></Footer>
      
//     </>
  
}

export default App

