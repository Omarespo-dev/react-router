import HomePages from "./pages/HomePages";
import ChiSiamoPages from "./pages/ChiSiamoPages";
import ListPostsPages from "./pages/ListPostsPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {


  return (

    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<HomePages />} ></Route>
        <Route path='/chisiamo' element={<ChiSiamoPages />} ></Route>
        <Route path='/listposts' element={<ListPostsPages />} ></Route>
      </Routes>

    </BrowserRouter>


  )
}

export default App
