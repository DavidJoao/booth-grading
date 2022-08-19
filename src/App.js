import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div style={{backgroundColor:'#24211a'}}>
      <div>
        <Header />
        <Navigation />
      </div>
      <div>
        <Routes>
            <Route path='/' element={ <About /> } />
            <Route path='/work' element={ <Work /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </div>
    </div> 
  );
}

export default App;
