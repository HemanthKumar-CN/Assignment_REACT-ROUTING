import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Items from './components/Items';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Items/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>

    </div>
  );
}

export default App;
