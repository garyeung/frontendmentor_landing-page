import './Header.less';
import Logo from '../components/bases/Logo';
import Menu from './Menu';
import Nav from './Nav';
import { bgDesUrl, bgMobUrl } from '../datas';

export interface HeaderPros{
  windowWidth: number, 
  button:string, 
  hName:string, 
  element: JSX.Element, 
  selectUrl: (mobUrl: string, DesUrl: string, winWidth?: number, mobiWidth?: number) => string
}


function Header({windowWidth, button, hName, element, selectUrl}:HeaderPros){

function bg(hName: string, windowWidth:number){
  if(hName === 'open'){
    return {background: '#000'};
  }
  else{
    return {backgroundImage: `url(${selectUrl(bgMobUrl, bgDesUrl, windowWidth)})`}
  }
}
    return(
        <>
          <section className={'header '+ ((hName ==='open')? hName+" r-100": hName)} style={bg(hName, windowWidth)}>
            <div className='header__head'>
              <Logo></Logo>
              {(windowWidth > 650)? <Menu/> : <Nav button={button}></Nav>}
            </div>
            <div className='header__body'>
              {element}
            </div>
          </section>
        </>
    )
}

// tomorrow finished the pop menu
export default Header;