import { Link } from "react-router-dom";

export default function MovieCard({titulo, id ,imagem_destaque}) {

    return(
        <>
        <div>
            <h1>{titulo}</h1>
            <img src={`/${imagem_destaque}`} alt="" />
            <Link to={`movies/${id}`}>Ver Detalhes</Link>
        </div>
        </>
    )

}