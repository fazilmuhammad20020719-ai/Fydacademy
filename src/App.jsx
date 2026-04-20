import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Courses from './Pages/Courses/Courses';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Checkout from './Pages/Checkout/Checkout';
import Curriculum from './Pages/Curriculum/Curriculum';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-white dark:bg-black flex flex-col font-sans overflow-x-hidden transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/courses" element={<PageTransition><Courses /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
              <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
              <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
              <Route path="/curriculum" element={<PageTransition><Curriculum /></PageTransition>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
