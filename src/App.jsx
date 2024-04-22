import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Componets/Header/Header';
import Home from './page/Home/Home';
import Blog from './page/Blog-page/Blog';
import About from './page/About/About';
import Projects from './page/Projects/Projects';
import Contact from './page/Contact/Contact';
import Footer from './Componets/Footer/Footer';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/'element={<Home/>}/> 
            <Route path='/blog'element={<Blog/>}/> 
            <Route path='/about'element={<About/>}/> 
            <Route path='/projects'element={<Projects/>}/> 
            <Route path='/contact'element={<Contact/>}/> 
            <Route path='/footer'element={<Footer/>}/> 

          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
 