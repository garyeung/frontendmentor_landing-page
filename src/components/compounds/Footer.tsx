import Copyright from "@/components/bases/Copyright"
import Logo from "@/components/bases/Logo"
import Nav from "@/components/bases/Nav"
import Socialmedia, { SocialmediaProps } from "@/components/bases/Socialmedia"
import "./Footer.less"

interface Props {
    companyName: string,
    socialMedias: SocialmediaProps[]
}

const Footer = ({companyName, socialMedias}:Props) => {

    const socialMediaList =  (
        <ul className="socialmedia-list">
            {
                socialMedias.map((media, index) => {
                    return (
                        <li className="socialmedia-li" key={index+media.name}>
                            <Socialmedia
                             url= {media.url}
                             icon={media.icon}
                             name={media.name}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )

    return (
        <footer className="footer">
            <div className="footer-container">
              <div className="footer-logo">
                  <Logo />
              </div>
              <div className="footer-socialmedia">
                  {socialMediaList}
              </div>
              <div className="footer-nav">
                  <Nav />
              </div>
              <div className="footer-copyright">
                  <Copyright name={companyName}/>
              </div>
            </div>
        </footer>
    )
}

export default Footer;