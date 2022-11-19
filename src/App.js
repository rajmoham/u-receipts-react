import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing.jsx'



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Landing/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
