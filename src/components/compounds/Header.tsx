import Logo from "@/components/bases/Logo";
import Menu from "@/components/bases/Menu";
import Nav from "@/components/bases/Nav";
import useScreeSize from "@/hooks/useScreenSize";
import Caption from "../bases/Caption";
import ReactiveImage from "../bases/ReactiveImage";
import "./Header.less";
import { useRef } from "react";

interface Props {
    bgDesktop: string,
    bgMobile: string,
    bgName: string,
    caption: string
}
const Header = (props: Props) => {
    const screenSize = useScreeSize();

    const headerRef = useRef<HTMLDivElement>(null);
    

    return (
        <header className="header" ref={headerRef}>
            <div className="header-bg">
                <ReactiveImage 
                    mobileSrc={props.bgMobile}
                    desktopSrc={props.bgDesktop}
                    alt={props.bgName}
                />
            </div>
            <div className="header-body">
              <Logo/>
              {
                  screenSize.width > 768 ? <Nav/> : <Menu/>
              }
              <Caption text={props.caption}/>
            </div>
        </header>
    )
}

export default Header;