import { useEffect, useState } from 'react';
import './App.less';
import Header, {HeaderPros}from './Header/Header';
import * as datas from './datas';
import Menu from './Header/Menu';
import Intro, {IntroProps} from './Intro/Intro';
import Product, { Creation } from './Product/Product';
import Footer from './Footer/Footer';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const headTitle = <h1 className='header-title'>{datas.headerTitle}</h1>;
  const mobileWidth = 650;  

  const headMenu:HeaderPros = {
    windowWidth: windowWidth,
    hName: 'header-web',
    button: 'menu',
    element: headTitle,
    selectUrl: deskOrMobi


  }
  const headerOpen: HeaderPros = {
    windowWidth: windowWidth,
    hName: 'open',
    button: 'close',
    element: <Menu />,
    selectUrl: deskOrMobi
  }

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
    <Header {...headMenu}></Header>
    <Header {...headerOpen}></Header>
    <Intro {...introData}/>
    <Product creations={creations}/>
    <Footer />
    </>
  )
}

export default App;
