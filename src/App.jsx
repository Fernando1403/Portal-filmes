import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
     <Header />
     <div className=''>
      <Outlet/>
     </div>
     
     {/* Exibe o header e a lista de filmes disponível divididos por
     Antigos(antes dos anos 2000)
     Bem-avaliados(nota maior que 9)*/}
    </>
  )
}

export default App
