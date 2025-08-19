import React from 'react';
import {navList} from '../datas';
const navLis: string[] = navList.split(" ");
// eslint-disable-next-line react-refresh/only-export-components
export const navItems = navLis.map((li) => {
    return (<NavItem item={li}/>)
})

function Nav({button}: {button:string}){


    return ( 
        <nav className='nav-board'>
          <img src={`images/icon-${button}.svg`} alt="menu" className='menu-button' onClick={() => menuToggle()}/>
        </nav>
    );
}

function NavItem({item}:{item: string}) {
    const handleNavItem = (e:React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.currentTarget.querySelector(".highlight")?.classList.toggle('highlight--active');
    }
   
    return (
    <li className="nav-li" onMouseOver={handleNavItem} onMouseOut={handleNavItem}>
        <a className="nav-li-a" href='#'>{item}</a>
        <span className='highlight'></span>
    </li>);
}

function menuToggle(){
    document.querySelector(".open")?.classList.toggle("r-100");
}

export default Nav;