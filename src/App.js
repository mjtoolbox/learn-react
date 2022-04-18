import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Component01 from './Component01';
import Home from './Home';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Component01 />} />
      </Routes>
    </>
  );
}

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/test'>Test</Link>
    </nav>
  );
};

export default App;
