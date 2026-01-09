import { useEffect, useState } from 'react';
import './App.less';
import * as datas from './datas';
import Footer from './Footer/Footer';
import Hero from './components/compounds/Hero';
import Interactive from './components/compounds/Interactive';
import Creations, { CreationsProps } from './components/compounds/Creations';
import { fetchCreationsInfo} from './services/store';
import { ICreationInfo } from '@/interfaces/creationInfo';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [creationsInfo, setCreationsInfo] = useState<ICreationInfo[]>([]); // State for creations data

  useEffect(() => {
    const handleResize = () => {
    setWindowWidth(window.innerWidth);}

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [windowWidth])

  // Fetch creations data when component mounts
  useEffect(() => {
    const loadCreations = async () => {
      const data = await fetchCreationsInfo();
      setCreationsInfo(data);
    };
    loadCreations();
  }, []); // Empty dependency array ensures this runs once on mount

  const creationsProps: CreationsProps = {
    creationsInfo: creationsInfo.map((creation) => ({
      mobileImg: creation.pictures.mobile,
      desktopImg: creation.pictures.desktop,
      caption: creation.title,
      path: "#", // simply demo
    })),    
  } 

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
    <Creations creationsInfo={creationsProps.creationsInfo} /> {/* Pass creationsData as prop */}
    <Footer />
    </>
  )
}

export default App;
