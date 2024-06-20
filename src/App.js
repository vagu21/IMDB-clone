import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<h1>Hello</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

