import "./Link.less"

interface Props {
    path: string,
    name: string
}
const Link =  ({path,name}: Props) => {

    return (
        <a className="link" href={path}>
            {name}
        </a>
    )
}

export default Link;