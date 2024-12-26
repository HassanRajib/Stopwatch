import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Watch from './pages/watch';

function App() {
  return (
    <Router>
      <div className="container mx-auto"> 
        <Routes>
          <Route path="/" element={<Watch />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;