import { Link } from "react-router-dom";

export default function MovieCard({title, id , backdrop_path}) {

    return(
        <>
        <div>
            <h1>{title}</h1>
            <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt="" />
            <Link to={`movies/${id}`}>Ver Detalhes</Link>
        </div>
        </>
    )

}