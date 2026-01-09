import Creation, { CreationProps } from "@/components/bases/Creation"
import "./Creations.less"

export interface CreationsProps {
    creationsInfo: CreationProps[]
}
const Creations = ({creationsInfo}:CreationsProps) => {


    const creationArr = creationsInfo.map((product,index) => {
        return (<Creation 
            key={product.caption+index}
            mobileImg={product.mobileImg}
            desktopImg={product.desktopImg}
            caption={product.caption}
            path={product.path}

           /> )
    }) 
    return (
        <section className="creations">
            <h2 className="creations-title">our creations</h2>
            <div className="creations-items">
                {creationArr}
            </div>
            <button className="creations-button">see all</button>
        </section>
    )
}

export default Creations;