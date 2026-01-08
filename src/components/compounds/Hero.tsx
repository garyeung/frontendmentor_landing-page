import Logo from "@/components/bases/Logo";
import Menu from "@/components/bases/Menu";
import Nav from "@/components/bases/Nav";
import useScreenSize from "@/hooks/useScreenSize";
import Caption from "@/components/bases/Caption";
import ReactiveImage from "@/components/bases/ReactiveImage";
import "./Hero.less";

interface Props {
    bgDesktop: string,
    bgMobile: string,
    bgName: string,
    caption: string
}

const Hero = (props: Props) => {
    const screenSize = useScreenSize();

    

    return (
        <header className="hero">
            <div className="hero-bg">
                <ReactiveImage 
                    mobileSrc={props.bgMobile}
                    desktopSrc={props.bgDesktop}
                    alt={props.bgName}
                />
            </div>
            <div className="hero-content">
              <div className="hero-head">
                <Logo/>
                {
                    screenSize.width > 768 ? <Nav/> : <Menu/>
                }
              </div>
              <div className="hero-caption">
                <Caption text={props.caption}/>
              </div>
            </div>
        </header>
    )
}

export default Hero;