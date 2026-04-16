import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Courses from './Pages/Courses/Courses';
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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
