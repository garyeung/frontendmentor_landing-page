import Creation from "@/components/bases/Creation"
import "./Creations.less"
import { fetchCreationsInfo } from "@/services/store"

const Creations = () => {

    const creationsInfo = fetchCreationsInfo();

    const creationArr = creationsInfo.map((product,index) => {
        return (<Creation 
            key={product.id+index}
            mobileImg={product.pictures.mobile}
            desktopImg={product.pictures.desktop}
            caption={product.title}
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