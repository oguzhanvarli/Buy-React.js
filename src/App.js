import Header from './pages/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Footer from './pages/Footer';
import Main from './pages/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './pages/Products';
import Categories from './pages/Categories';
import CartDetail from './pages/CartDetail';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<CartDetail/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
