// importo le  page 
import HomePages from "./pages/HomePages";
import ChiSiamoPages from "./pages/ChiSiamoPages";
import ListPostsPages from "./pages/ListPostsPages";
import CreatePostPage from "./pages/CreatePostPage";
import PostsDetails from "./pages/PostsDetails";
import NotFoundPage from "./pages/NotFoundPage";
// Importo I componenti del router
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";

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
          <Route path='/chisiamo' element={<ChiSiamoPages />} />
          <Route path="/listposts"element={<ListPostsPages />} />
          <Route path="/createposts"element={<CreatePostPage />} />
          <Route path="/listposts/:id" element={<PostsDetails />} />
          {/* REDIRECT */}
          <Route path="/listapost" element={<Navigate to="/listposts" />} />
          {/* rotta del 404 per rotte non previste */}
          <Route path="*" element={<NotFoundPage />} />
          
          {/* <Route path='/listposts'>
            <Route index element={<ListPostsPages />} />
            <Route path="createposts"element={<CreatePostPage />} />
          </Route> */}
          
        </Route>

      </Routes>

    </BrowserRouter>


  )
}

export default App
