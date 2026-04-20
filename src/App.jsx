import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Courses from './Pages/Courses/Courses';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Checkout from './Pages/Checkout/Checkout';
import Curriculum from './Pages/Curriculum/Curriculum';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-white dark:bg-black flex flex-col font-sans overflow-x-hidden transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/curriculum" element={<Curriculum />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
