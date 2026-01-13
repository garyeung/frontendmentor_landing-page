import './App.less';
import Hero from '@/components/compounds/Hero';
import Interactive from '@/components/compounds/Interactive';
import Creations from '@/components/compounds/Creations';
import { fetchCreationsInfo, fetchHeroInfo, fetchInteractiveInfo, fetchSocialMediasInfo } from '@/services/store';
import Footer from '@/components/compounds/Footer';
import useFetchData from './hooks/useFetchData';
import { useMemo } from 'react';

function App() {
  const { data: creationsInfo, loading: creationsLoading } = useFetchData(fetchCreationsInfo);
  const { data: socialmediasInfo, loading: socialmediasLoading } = useFetchData(fetchSocialMediasInfo);
  const { data: heroInfo, loading: heroLoading } = useFetchData(fetchHeroInfo);
  const { data: interactiveInfo, loading: interactiveLoading } = useFetchData(fetchInteractiveInfo);

  const companyName = "Loopstudios";

  const creationsProps = useMemo(() => ({
    creationsInfo: creationsInfo?.map((creation) => ({
      mobileImg: creation.pictures.mobile,
      desktopImg: creation.pictures.desktop,
      caption: creation.title,
      path: "#", // simply demo
    })) || [],
  }), [creationsInfo]);

  const isLoading = creationsLoading || socialmediasLoading || heroLoading || interactiveLoading;

  // Render the full component once all data is loaded
  return !isLoading && (
    <div className='container' role='application'>
      {heroInfo && (
        <Hero
          bgDesktop={heroInfo.bgDesktop}
          bgMobile={heroInfo.bgMobile}
          bgName="hero"
          caption={heroInfo.caption}
        />
      )}
      {interactiveInfo && (
        <Interactive
          mobileImg={interactiveInfo.pictureMobile}
          desktopImg={interactiveInfo.pictureDesktop}
          title={interactiveInfo.title}
          introduction={interactiveInfo.text}
        />
      )}
      <Creations creationsInfo={creationsProps.creationsInfo} />
      {socialmediasInfo && <Footer companyName={companyName} socialMedias={socialmediasInfo} />}
    </div>
  )
}

export default App;
