import { useEffect, useRef, useState } from "react"
import "./ReactiveImage.less"

interface Props {
    mobileSrc: string,
    desktopSrc: string,
    alt: string
}

const ReactiveImage = (props: Props) => {
    const [loading, setLoading] = useState(true)
    const handleLoaded = () => {
        setLoading(false);
    }
    const mobileRef = useRef<HTMLImageElement>(null);
    const desktopRef = useRef<HTMLImageElement>(null);

    useEffect(() => {

        // for cache
       if (mobileRef.current?.complete || desktopRef.current?.complete) {
          setLoading(false)
       }
    }, [])
    

    return (
        <div className={`reactive-image${loading? " loading": ""}`}>
            <img src={props.mobileSrc} alt={props.alt} className="reactive-image--mobile"  onLoad={handleLoaded} ref={mobileRef}/>

            <img src={props.desktopSrc} alt={props.alt} className="reactive-image--desktop" onLoad={handleLoaded} ref={desktopRef}/>
        </div>
    )
} 

export default ReactiveImage;