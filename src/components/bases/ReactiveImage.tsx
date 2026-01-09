import "./ReactiveImage.less"

interface Props {
    mobileSrc: string,
    desktopSrc: string,
    alt: string
}

const ReactiveImage = (props: Props) => {
    return (
        <>
            <img src={props.mobileSrc} alt={props.alt} className="reactive-image--mobile" />
            <img src={props.desktopSrc} alt={props.alt} className="reactive-image--desktop" />
        </>
    )
} 

export default ReactiveImage;