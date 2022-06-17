import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Carousel from './components/carousel';
import Content from './components/content';
import { Route,Routes } from 'react-router-dom';
import ProductDetails from './components/productDetails';
import Login from './components/login';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero/>
      <Carousel/>
      <Routes>
        <Route path='/' element={<Content/>} />
        <Route path='/product/:slug' element={<Content/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
