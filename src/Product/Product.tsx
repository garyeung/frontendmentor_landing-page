import { ReactEventHandler } from 'react';
import './Product.less';
import React from 'react';

function Product({creations}:{creations: JSX.Element[]}){
    
    const handleButton = () => {
           document.querySelector('.product__button')?.classList.toggle('product__button--active');

    }

    return(
        <section className="product">
            <h2 className="product__title">our creations</h2>
            <div className="product__creations">{creations}</div>
            <a className="product__button" href="#" onMouseOver={() => handleButton()} onMouseOut={() => handleButton()}>see all</a>
        </section>
    );
}


export interface creationProps {
    creationURL: string, 
    creationCaption: string
};

export function Creation({creationURL, creationCaption}: creationProps){
    const handleCreation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        e.currentTarget.classList.toggle("creation--active");
    }
    return (
        <a href="#" className="creation" onMouseOver={handleCreation} onMouseOut={handleCreation}>
            <img className="creation__img" src={creationURL} alt={creationCaption}/>
                <span className="creation__caption">{creationCaption}</span>
        </a>
    );
}



export default Product;
