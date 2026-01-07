import { logoUrl } from "../datas";
function Logo(){
    return(
        <div className="logo-wrapper">
          <img className="logo" src={logoUrl} alt="logo"/>
        </div>
    )
}

export default Logo;