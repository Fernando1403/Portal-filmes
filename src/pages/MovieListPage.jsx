import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"

export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
        .then( results => results.json())
        .then( data => setFilmes(data.results))
        .catch( error => console.log(error))
        .finally( () => console.log("Acabou!"))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)

        setListaFilmes(filmesFiltrados)
    }

    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))
    
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
            
            <section>
            {
                filmesFiltrados.length > 0 ?
                    filmesFiltrados
                    .map(filme=>(
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                :
                <p>Filme Não Encontrado</p>
            }
            </section>
        </>
    )
}