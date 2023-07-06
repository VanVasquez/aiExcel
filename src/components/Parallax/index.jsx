import { useEffect } from 'react';
import bg from '../../assets/bg.png';
import fg from '../../assets/fg.png';
import logo from '../../assets/logo.png';
import './index.css'

const Parallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const bgElement = document.getElementById('bg');
      const logoElement = document.getElementById('logo');
      const fgElement = document.getElementById('fg');
      const pursuitElement = document.getElementById('pursuit');
      const btnElement = document.getElementById('btn');

      bgElement.style.width = `${2500 + value * 0.47}px`;
      logoElement.style.top = `${value * 0.43}px`;
      fgElement.style.top = `${value * 0}px`;
      pursuitElement.style.transform = `translate(${50 - value * 0.47}%, -50%)`;
      btnElement.style.transform = `translate(-50%, ${value}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ( 
    <div className="parallax-container">
      <img src={bg} id="bg"/>
      <img src={logo} id="logo"/>
      <h1 className="text" id="pursuit">Excellence</h1>
      <a href="#about" id="btn">Discover</a>
      <img src={fg} id="fg"/>
    </div>
  )
}

export default Parallax