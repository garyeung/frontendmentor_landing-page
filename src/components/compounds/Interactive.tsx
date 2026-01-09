import ReactiveImage from "../bases/ReactiveImage"
import "./Interactive.less"

interface Props {
    mobileImg: string,
    desktopImg: string,
    title: string,
    introduction: string
}

const Interactive = ({mobileImg, desktopImg, title, introduction}: Props) => {
    return (
        <section className="interactive">
          <div className="interactive-container">
            <div className="interactive-img-wrapper">
                <ReactiveImage 
                 mobileSrc={mobileImg}
                 desktopSrc={desktopImg}
                 alt={title}
                />
            </div>
            
            <div className="interactive-text">
              <h2 className="interactive-title">{title}</h2>
              <p className="interactive-introduction">
                {introduction}
              </p>
            </div>
          </div>
        </section>
    )
}

export default Interactive;