import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
// import './styles.css';
import { Helmet } from 'react-helmet';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';

function App() {
  return (
    <div className='App'>
      <Helmet>
        <style>{'body {background-color: #000;}'}</style>
      </Helmet>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/explore' element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
