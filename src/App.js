import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/explore' element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
