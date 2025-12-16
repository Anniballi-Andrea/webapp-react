import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import Movie from "./pages/Movie"
import Movies from "./pages/Movies"
import PageNotFound from "./pages/PageNotFound"
import { GlobalProvider } from "./context/GlobalContext"



function App() {

  //
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<Movie />} />

            </Route>
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
