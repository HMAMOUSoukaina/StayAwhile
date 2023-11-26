
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';

import './styles.css'
//import components
import Home from './routes/Home'
import Service from './routes/Service'
import About from './routes/About'
import Contact from './routes/Contact'


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;

