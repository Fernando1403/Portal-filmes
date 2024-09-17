import { NavLink } from "react-router-dom";

export default function Header(){
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
                    </ul>
                </nav>
            </header>
        </>
    )
}