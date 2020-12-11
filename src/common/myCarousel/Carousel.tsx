import React, {useState} from "react";
import  cl from './carousel.module.css'

type itemObgType={
    img: string
    name: string
    date: string
    desc:string
}
export const Carousel = () => {
    const itemsObg:Array<itemObgType> = [
        {
            img: './img/1.jpg',
            name: 'Mary Crazy',
            date: '2 мес обуч',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
                '                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                '                        Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
                '                        dolorem ipsum quia dolor sit amet, consectetur.'
        },
        {
            img: './img/1.jpg',
            name: 'Mary Crazy',
            date: '2 мес обуч',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
                '                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                '                        Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
                '                        dolorem ipsum quia dolor sit amet, consectetur.'
        },

    ]
    let[x,setX]=useState(0)
const onLeft=()=>{
        x === 0 ? setX(-100*(itemsObg.length -1)) : setX(x-100)
    }
const onRight=()=>{
    x === +100*(itemsObg.length -1) ? setX(x+100) : setX(0)
    }

    return (
        <div className={cl.carouselInner} >
            {itemsObg.map((i,index) => {
                return(
                <div key={index} className={cl.carouselItem} style={{transform: `translateX(${x}%)`}}>
                    <div className="rewievs__block_wrep d-flex">
                        <img src={i.img} alt="" className={cl.imgFluid}/>
                        <div className={cl.reviewsBlockData}>
                            <h6>{i.name}</h6>
                            <p>{i.date}</p>
                        </div>
                    </div>
                    <div className={cl.rewievsBlockDesk}>
                        <p>
                            {i.desc}
                        </p>
                    </div>
                </div>
                )})}
            <button className={cl.left} onClick={onLeft}>{`>`}</button>
            <button className={cl.right} onClick={onRight}>{`<`}</button>
        </div>
    )
}