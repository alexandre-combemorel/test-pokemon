// libs
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
// styles
import "./App.scss"
// components
import Gallery from './pages/Gallery/Gallery'
import Home from "./pages/Home/Home"
import Pokedex from "./pages/Pokedex/Pokedex"
import PokedexListing from "./pages/PokedexListing/PokedexListing"
import { Exercices } from "./pages/Exercices/Exercices"

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/pokedex", element: <Pokedex /> },
    { path: "/pokedex-listing", element: <PokedexListing /> },
    { path: "/exercices", element: <Exercices /> },
])

export default function App() {
    return <section className="app">
        <RouterProvider router={router} />
    </section>
}