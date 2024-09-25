import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"
import { useState } from "react"

export default function MovieListPage(){

    const [search, setSearch] = useState("")

    const [listaFilmes, setListaFilmes] = useState(movies)

    const handleSearch = (e) => {
        setSearch(e.target.value)

        setListaFilmes(filmesFiltrados)
    }
    
    return(
        <>
            <h2>Veja a lista completa de Filmes</h2>
            <input 
            className="bg-neutral-200 rounded"
            type="text" 
            name="search"
            id="search"
            value={search}
            placeholder="Digite um filme..."
            onChange={handleSearch}/>
            
            <div className="flex">
            {
                listaFilmes
                .filter(( movie => (movie.titulo).includes(search)))
                .map(movie=>(
                    <MovieCard key={movie.id} {...movie}/>
                ))
            }
            </div>
        </>
    )
}