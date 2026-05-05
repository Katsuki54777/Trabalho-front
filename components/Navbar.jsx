import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '10px', padding: '10px', background: '#222', color: '#fff' }}>
      <Link to="/users" style={{ color: '#fff' }}>Usuários</Link>
      <Link to="/categorias" style={{ color: '#fff' }}>Categorias</Link>
      <Link to="/livros" style={{ color: '#fff' }}>Livros</Link>
      <Link to="/emprestimos" style={{ color: '#fff' }}>Empréstimos</Link>
    </nav>
  );
}

export default Navbar;