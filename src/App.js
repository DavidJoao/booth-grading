
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div style={{backgroundColor:'#252529'}}>
      <div>
        <Navigation />
        <Header />
      </div>
      <div>
        <Routes>
            <Route path='/' element={ <About /> } />
            <Route path='/work' element={ <Work /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </div>
      <BackToTop />
    </div> 
  );
}

export default App;
