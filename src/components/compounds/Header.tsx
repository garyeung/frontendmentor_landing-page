import Logo from "@/components/bases/Logo";
import Menu from "@/components/bases/Menu";
import Nav from "@/components/bases/Nav";
import useScreeSize from "@/hooks/useScreenSize";
import Caption from "../bases/Caption";
import ReactiveImage from "../bases/ReactiveImage";

interface Props {
    bgDesktop: string,
    bgMobile: string,
    bgName: string,
    caption: string
}
const Header = (props: Props) => {
    const screenSize = useScreeSize();

    return (
        <header className="header">
            <Logo/>
            {
                screenSize.width > 768 ? <Menu/> : <Nav/>
            }
            <Caption text={props.caption}/>
            <div className="header-bg">
                <ReactiveImage 
                    mobileSrc={props.bgMobile}
                    desktopSrc={props.bgDesktop}
                    alt={props.bgName}
                />
            </div>
        </header>
    )
}

export default Header;