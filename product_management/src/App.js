import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './product/ProductList';
import CreateProduct from './product/CreateProduct';
import Navbar from './common/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

