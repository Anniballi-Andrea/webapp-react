import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./components/HomePage"
import About_Us from "./components/About_Us"
import Movie from "./components/movie"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/About_Us" element={<About_Us />} />
            <Route path="/:id" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
