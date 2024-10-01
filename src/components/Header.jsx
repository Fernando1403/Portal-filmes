import { NavLink } from "react-router-dom";
import Login from "./LOgin";
import { useState } from "react";

export default function Header(){

    const [isLoggged, setIsLogged] = useState(false)

    const handleLogin = () => {
        setIsLogged(!isLoggged)
    }

    return(
        <>
            <header className="py-5 flex w-full h-14 justify-around items-center bg-red-700 text-white font-semibold">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/movies'>Filmes</NavLink></li>
                        <li><NavLink to='/genre'>Gêneros</NavLink></li>
                        {isLoggged && <li><NavLink to='/settings'>Configurações</NavLink></li>}
                    </ul>
                </nav>
                <Login isLoggged={isLoggged} handleLogin={handleLogin}/>
            </header>
        </>
    )
}