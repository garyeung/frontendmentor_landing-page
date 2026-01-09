import { navItems } from "./Nav";

function Menu(){
    return (
        <div className="manu-board">
            <ul className="menu-list">
                {navItems}
            </ul>
        </div>
    )
}

export default Menu;