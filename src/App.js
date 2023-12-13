import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './styles.css'
//import components
import Service from './routes/Service'
import About from './routes/About'
import Contact from './routes/Contact'
import Home from './routes/Home'
import Sign from './routes/Sign'
import SignUpPage from './components/SignUpPage'
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
    </div>
    
  );
}

export default App;
