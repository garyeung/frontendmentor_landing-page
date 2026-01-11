import "./Copyright.less"

interface Props{
    name: string

}

const Copyright = ({name}:Props) => {

    const currYear = new Date().getFullYear();

    return (
        <p className="copyright">
            © {currYear} {name}. All rights reserved.
        </p>
    )
}

export default Copyright;