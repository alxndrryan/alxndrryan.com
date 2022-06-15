import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faFile,
  faAward,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Socials from './components/Socials';

import './css/App.min.css';

library.add(fab, faFile, faAward, faWindowMaximize);

const App = () => {
  return (
    <>
      <Navbar />
      <Socials />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
