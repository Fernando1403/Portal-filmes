import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function MovieDetailPage(){

    const {id} = useParams()
    const [movie, SetMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(response => response.json())
            .then(data => { 
                SetMovie(data) 
                console.log(data)
            })
            .catch(err => console.log(err));
    }, []);

    return(
        <>
        <div className='h-dvh bg-no-repeat' style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`
        }}>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} />
            <p>{movie.overview}</p>
            <p>⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'Sem Votos'}</p>
        </div>
        </>
    )
}