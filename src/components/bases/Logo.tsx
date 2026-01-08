import logo from "@/assets/logos/logo.svg";
import "./Logo.less"

function Logo(){
    return(
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className="logo"/>
        </div>
    )
}

export default Logo;