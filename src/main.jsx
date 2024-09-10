import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
import MovieByGenrePage from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

{/* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {index: true, element: <Home />},
        {path: 'movie', element: <MovieListPage />},
        {path: 'movieDetail', element: <MovieDetailPage />},
        {path: 'genreListPage', element: <GenreListPage />},
        {path: 'movieByGenrePage', element: <MovieByGenrePage />},
        {path: 'pageNotFound', element: <PageNotFound />}
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)