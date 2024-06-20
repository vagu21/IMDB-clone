import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="movie/:id" element={<h1>Movie Details Page</h1>}/>
          <Route path="movies/:type" element={<h1>Movie List Page</h1>}/>
          <Route path='/*' element={<h1>Error page</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

