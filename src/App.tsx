import { useEffect, useState } from 'react';
import './App.less';
import * as datas from './datas';
import Footer from './Footer/Footer';
import Hero from './components/compounds/Hero';
import Interactive from './components/compounds/Interactive';
import Creations from './components/compounds/Creations';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
    setWindowWidth(window.innerWidth);}

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [windowWidth])


  return (
    <>
    <Hero 
      bgDesktop={datas.bgDesUrl}
      bgMobile={datas.bgMobUrl}
      bgName="hero"
      caption={datas.headerTitle}
    />
    <Interactive 
      mobileImg={datas.introImgMobile}
      desktopImg={datas.introImgDesk}
      title={datas.introTitle}
      introduction={datas.introText}
    />
    <Creations />
    <Footer />
    </>
  )
}

export default App;
