import useScreeSize from "@/hooks/useScreenSize";
import "./ReactiveImage.less"

interface Props {
    mobileSrc: string,
    desktopSrc: string,
    alt: string
}

const ReactiveImage = (props: Props) => {
    const screenSize = useScreeSize();

    return (
        <img alt={props.alt} src={screenSize.width > 768 ? props.desktopSrc : props.mobileSrc} className="reactive-image"/>
    )
} 

export default ReactiveImage;