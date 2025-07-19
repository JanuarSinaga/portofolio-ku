import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
  AOS.init({
    duration: 1000, // durasi animasi dalam milidetik
    once: false     // false agar animasi aktif setiap section muncul
  });
}, []);


  return (
    <div className="App">
      <Navbar onNavigate={handleNavigate} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
