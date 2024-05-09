import Layout from "./components/layout";
import HomePage from "./components/home/HomePage";
import BlogPage from "./components/blogs/BlogPage"
import AuthorPage from "./components/authors/AuthorPage"
import NotFound from "./components/404/NotFound"
import { Routes , Route } from "react-router-dom";


function App() {

  return (
    <Layout>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/blogs/:slug" element={<BlogPage/>}/>
         <Route path="/authors/:slug" element={<AuthorPage/>}/>
         <Route path="/*" element={<NotFound/>} />
      </Routes>
    </Layout>
  )
}

export default App
