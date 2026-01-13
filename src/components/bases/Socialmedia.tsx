import "./Socialmedia.less"

export interface SocialmediaProps {
    url: string,
    icon: string,
    name: string
}


const Socialmedia = ({url, icon, name}: SocialmediaProps) => {

    return (
        <a className="socialmedia" href={url} aria-label={name}>
            <img src={icon} alt={name} className="socialmedia-icon" loading="lazy"/>
        </a>
    )
}

export default Socialmedia;