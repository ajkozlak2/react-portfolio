import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import AboutMe from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx'; // Import the Resume component

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} /> {/* Use element instead of component */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Use element instead of component */}
          <Route path="/contact" element={<Contact />} /> {/* Use element instead of component */}
          <Route path="/resume" element={<Resume />} /> {/* Use element instead of component */}
          <Route path="/" element={<Content />} /> {/* Use element instead of component */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;