function Login({isLoggged, handleLogin}) {
    return ( 
        <>  
            <div className="flex gap-4 items-center">
                {isLoggged && <p>Olá, Usuário123</p>}
                <button
                onClick={handleLogin}
                className="bg-white text-red-800 px-4 py-1 rounded">{isLoggged ? "Logout" : "Login"}</button>
            </div>
        </>
     );
}

export default Login;