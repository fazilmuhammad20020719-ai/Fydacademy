import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Courses from './Pages/Courses/Courses';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
