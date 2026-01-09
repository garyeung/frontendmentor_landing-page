import "./Creation.less"
import ReactiveImage from "./ReactiveImage"

interface Props {
    mobileImg: string,
    desktopImg: string,
    caption: string
}

const Creation = ({ mobileImg, desktopImg, caption }: Props) => {

    return (
            <button className="creation">
                <div className="creation-img-wrapper">
                  <ReactiveImage 
                    mobileSrc={mobileImg} 
                    desktopSrc={desktopImg} 
                    alt={caption}
                  />
                <div className="creation-overlay"></div>
              </div>
              <div className="creation-text">
                  <span className="creation-caption">{caption}</span>
              </div>
          </button>
    )
}

export default Creation;