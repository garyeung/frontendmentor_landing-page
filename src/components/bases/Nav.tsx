import { routes } from "@/routes"
import "./Nav.less"
import Link from "@/components/bases/Link"


const links =  routes.map ((route, index) => {
    return (
        <li className="nav-li" key={index}>
            <Link path={route.path} name={route.name}/>
        </li>
    )
})

const Nav = () => {

    return (
        <nav className="nav-board">
            <ul className="nav-list">
                {links}
            </ul>
        </nav>
    )

}

export default Nav