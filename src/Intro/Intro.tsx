import './Intro.less' ;

export interface IntroProps {
    title: string,
    imgUrl: string,
    text: string,
}
function Intro({title, imgUrl, text}: IntroProps) {

    return(
        <section className="intro">
            <div className="intro__imgboard">
                <img className="intro__img" alt="interact" src={imgUrl}/>
            </div>
            <div className="intro__textboard">
                <h2 className="intro__title">{title}</h2>
                <p className="intro__text">{text}</p>
            </div>
        </section>
    )

}

export default Intro;