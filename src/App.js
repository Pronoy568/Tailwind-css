import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Content from './components/Content';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Navbar from './components/Navbar';


function App() {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const hideMenu = () =>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false);
      }
    }

    window.addEventListener('resize',hideMenu);

    return () =>{
      window.removeEventListener('resize',hideMenu);
    }

  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <Switch>
          <Route exact path="/">
            <Hero/>
            <Content/>
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
