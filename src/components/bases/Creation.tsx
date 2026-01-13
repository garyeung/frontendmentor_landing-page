import "./Creation.less"
import ReactiveImage from "./ReactiveImage"

export interface CreationProps {
    mobileImg: string,
    desktopImg: string,
    caption: string,
    path: string,
}

const Creation = ({ mobileImg, desktopImg, caption,path }: CreationProps) => {

    return (
            <a 
            href={path}
            className="creation">
                <div className="creation-img-wrapper">
                  <ReactiveImage 
                    mobileSrc={mobileImg} 
                    desktopSrc={desktopImg} 
                    alt={""} // for a11y
                  />
                <div className="creation-overlay"></div>
              </div>
              <div className="creation-text">
                  <span className="creation-caption">{caption}</span>
              </div>
          </a>
    )
}

export default Creation;