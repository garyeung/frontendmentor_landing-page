import { useEffect, useState } from 'react';
import './App.less';
import * as datas from './datas';
import Hero from '@/components/compounds/Hero';
import Interactive from '@/components/compounds/Interactive';
import Creations, { CreationsProps } from '@/components/compounds/Creations';
import { fetchCreationsInfo, fetchSocialMediasInfo} from '@/services/store';
import { ICreationInfo } from '@/interfaces/creationInfo';
import Footer from '@/components/compounds/Footer';
import ISocialMediaInfo from '@/interfaces/socialmediaInfo';

function App() {
  const [creationsInfo, setCreationsInfo] = useState<ICreationInfo[]>([]); // State for creations data

  const companyName = "Loopstudios";
  const [socialmediasInfo, setSocialmediasInfo] = useState<ISocialMediaInfo[]>([]); // State for socialmedias data


  // Fetch creations data when component mounts
  useEffect(() => {
    const loadCreations = async () => {
      const data = await fetchCreationsInfo();
      setCreationsInfo(data);
    };
    loadCreations();
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    const loadSocialMedias = async () => {
      const data = await fetchSocialMediasInfo();
      setSocialmediasInfo(data);
    };
    loadSocialMedias();

  }, [])

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
    <Creations creationsInfo={creationsProps.creationsInfo} /> 
    <Footer companyName={companyName} socialMedias={socialmediasInfo}/>
    </>
  )
}

export default App;
