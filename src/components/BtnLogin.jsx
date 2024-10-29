export default function BtnLogin({verificar, isLogged}) {
    
    return ( 
        <>
        <div className="flex gap-4 items-center">
            {isLogged && <p>Ola, user123!</p>}
            <button onClick={verificar} className="bg-white text-red-950 border border-1 px-3 p-1 rounded">{isLogged ? 'Loggout' : 'Login'}</button>
        </div>
        </>
     );
}
