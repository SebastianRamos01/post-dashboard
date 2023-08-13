import { Route, Routes, useParams } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import Addpost from "./components/Addpost"
import Listpost from "./components/Listpost"
import EditPost from "./components/EditPost"

function editPage(){
    let { postId } = useParams()
  }
function App() {
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/new-post" element={<Addpost></Addpost>}></Route>
        <Route path="/posts" element={<Listpost></Listpost>}></Route>
        <Route path="/posts/:id" element={<EditPost></EditPost>}></Route>
      </Routes>
      <Navbar></Navbar>
    </>
  )
}

export default App
