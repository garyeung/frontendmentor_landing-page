import { useEffect, useState } from 'react';
import './App.less';
import * as datas from './datas';
import Intro, {IntroProps} from './Intro/Intro';
import Product, { Creation } from './Product/Product';
import Footer from './Footer/Footer';
import Hero from './components/compounds/Hero';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileWidth = 650;  


  const introData: IntroProps = {
    text: datas.introText,
    title: datas.introTitle,
    imgUrl: deskOrMobi(datas.introImgMobile, datas.introImgDesk)
  }

  useEffect(() => {
    const handleResize = () => {
    setWindowWidth(window.innerWidth);}

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [windowWidth])

  function deskOrMobi(mobUrl: string, DesUrl: string, winWidth=windowWidth, mobiWidth=mobileWidth ){
    if(winWidth > mobiWidth){
      return DesUrl;
    }
    return mobUrl
  }

  function mobiOrDesk(mobiUrl: string, winWidth=windowWidth, mobiWidth=mobileWidth){
    if((winWidth > mobiWidth) && mobiUrl.includes("mobile")){
      return mobiUrl.replace('mobile', 'desktop');
    }
    return mobiUrl;
  }

  const creations: JSX.Element[] = datas.creationsList.map((item) => {
    return (<Creation creationCaption={item.title} creationURL={mobiOrDesk(item.url, windowWidth)}/>)
    
  })

  return (
    <>
    <Hero 
      bgDesktop={datas.bgDesUrl}
      bgMobile={datas.bgMobUrl}
      bgName="hero"
      caption={datas.headerTitle}
    />
    <Intro {...introData}/>
    <Product creations={creations}/>
    <Footer />
    </>
  )
}

export default App;
