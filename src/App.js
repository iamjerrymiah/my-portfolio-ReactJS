import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import InstaList from './components/InstaList/InstaList';
import MoList from './components/MoList/MoList';
import Ourtechengineering from './components/ourTechList/ourTechList';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './Context';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{ 
    backgroundColor: darkMode ? "#222" : "white", 
    color: darkMode && "white"}}>
      <Toggle />
      <Intro />
      <About />
      <Ourtechengineering />
      <ProductList />
      <InstaList />
      <MoList />
      <Contact />
    </div>
  );
}

export default App;
