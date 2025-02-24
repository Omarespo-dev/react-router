// importo le 3 page 
import HomePages from "./pages/HomePages";
import ChiSiamoPages from "./pages/ChiSiamoPages";
import ListPostsPages from "./pages/ListPostsPages";

// Importo I componenti del router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout andiamo a richiamare a riga 23
import DefaultLayout from "./layouts/DefaultLayout";

// Importo css
import './App.css'

function App() {


  return (

    <BrowserRouter>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePages />} ></Route>
          <Route path='/chisiamo' element={<ChiSiamoPages />} ></Route>
          <Route path='/listposts' element={<ListPostsPages />} ></Route>
        </Route>

      </Routes>

    </BrowserRouter>


  )
}

export default App
