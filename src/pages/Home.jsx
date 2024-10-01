import CardContainer from "../components/CardContainer"
import MovieCard from "../components/MovieCard"
import dataMovies from '../data/movies.json'

export default function Home(){

    return(
        <>
            <CardContainer titulo="Filmes Antigos">
                {dataMovies
                .filter(movie => movie.ano_lancamento < 2000)
                .map(movie=>(
                    <MovieCard key={movie.id} {...movie}/>
                ))}
            </CardContainer>
            <CardContainer titulo="Filmes Novos">
                {dataMovies
                .filter(movie => movie.ano_lancamento > 2000)
                .map(movie=>(
                    <MovieCard key={movie.id} {...movie}/>
                ))}
            </CardContainer>
            <CardContainer titulo="Filmes Melhor Avaliados">
                {dataMovies
                .filter(movie => movie.avaliacao >= 9)
                .map(movie=>(
                    <MovieCard key={movie.id} {...movie}/>
                ))}
            </CardContainer>
        </>
    )
}