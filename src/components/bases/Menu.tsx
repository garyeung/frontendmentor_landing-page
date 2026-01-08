import "./Menu.less"
import Logo from "@/components/bases/Logo"
import { routes } from "@/routes"
import Link from "@/components/bases/Link"
import IconHamburger from "@/assets/icons/icon-hamburger.svg?react"
import IconClose from "@/assets/icons/icon-close.svg?react"
import { useState } from "react"

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const links = routes.map((route, index) => {
        return (
            <li className="menu-li" key={index}>
                <Link path={route.path} name={route.name}/>
            </li>
        )
    })
    return (
        <div className="menu">
            <button className="menu-open" onClick={handleOpen}>
                <IconHamburger/>
            </button>
          <div className={`menu-board ${open?"menu-board--open":""}`}>
             <div className="menu-head">
                <Logo/>
                <button className="menu-close" onClick={handleClose}>
                    <IconClose/>
                </button>
             </div>
              <ul className="menu-list">
                  {links}
              </ul>
          </div>
        </div>
    )
}

export default Menu;