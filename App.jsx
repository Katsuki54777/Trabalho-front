import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./pages/UserList";
import UserCreate from "./pages/UserCreate";
import UserEdit from "./pages/UserEdit";
import CategoriaList from "./pages/CategoriaList";
import CategoriaCreate from "./pages/CategoriaCreate";
import CategoriaEdit from "./pages/CategoriaEdit";
import LivroList from "./pages/LivroList";
import LivroCreate from "./pages/LivroCreate";
import LivroEdit from "./pages/LivroEdit";
import EmprestimoList from "./pages/EmprestimoList";
import EmprestimoCreate from "./pages/EmprestimoCreate";
import EmprestimoEdit from "./pages/EmprestimoEdit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        
        <Route path="/users" element={<UserList />} />
        <Route path="/users/create" element={<UserCreate />} />
        <Route path="/users/edit/:id" element={<UserEdit />} />

        <Route path="/categorias" element={<CategoriaList />} />
        <Route path="/categorias/create" element={<CategoriaCreate />} />
        <Route path="/categorias/edit/:id" element={<CategoriaEdit />} />

        <Route path="/livros" element={<LivroList />} />
        <Route path="/livros/create" element={<LivroCreate />} />
        <Route path="/livros/edit/:id" element={<LivroEdit />} />

        <Route path="/emprestimos" element={<EmprestimoList />} />
        <Route path="/emprestimos/create" element={<EmprestimoCreate />} />
        <Route path="/emprestimos/edit/:id" element={<EmprestimoEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;