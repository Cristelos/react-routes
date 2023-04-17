
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import CharactersPage from './pages/Characters/CharactersPage';
import ContactPage from './pages/ContactPage/ContactPage';
import QuotesPage from './pages/QuotesPage/QuotesPage';

function App() {
  return (
    <Router>

    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/quotes">Quotes</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/characters' element={<CharactersPage/>}/>
        <Route path='/quotes' element={<QuotesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
