import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} /> {/* Add the Resume route */}
          <Route path="/" exact>
            <Content />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;