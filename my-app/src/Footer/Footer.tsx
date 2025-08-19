import './Footer.less';
import Logo from "../Header/Logo";
import Menu from "../Header/Menu";
import { socialMediaList } from "../datas"; 

function Footer(){
    return(
        <section className="footer">
            <Logo />
            <Menu />
            <Contact />
            <Copyright />
        </section>
    );
}

export function Contact() {
    const contactItems = socialMediaList.map((item) => {
        return <Socialmedia url={item.url} alt={item.name}/>
    })

    return(
        <div className="contact">
            {contactItems}
        </div>
    );
}

export function Socialmedia({url, alt}: {url: string, alt: string}){
    const handleSocialMedia = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.currentTarget.querySelector(".highlight")?.classList.toggle('highlight--active');
    }
   
    return(
        <>
        <a className="social-media" href="#" onMouseOver={handleSocialMedia} onMouseOut={handleSocialMedia}>
            <img src={url} alt={alt} className="social-media__img"/>
            <span className='highlight'></span>
        </a>
        </>
    )
}

export function Copyright(){
    return( <p className="copyright">
          © 2021 Loopstudios. All rights reserved.</p>
          );
}

export default Footer;