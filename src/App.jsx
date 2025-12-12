import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import Movie from "./pages/Movie"
import Movies from "./pages/Movies"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/:id" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
