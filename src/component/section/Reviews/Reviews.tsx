import React from 'react';
import {NavLink} from "react-router-dom";
import {Icon} from "semantic-ui-react";
import cl from './Reviews.module.scss';
import {Carousel} from "../../../common/myCarousel/Carousel";
type ReviewsProps={

}
export const Reviews = () => {

    return(
        <section className={cl.rewievs}>
            <div className="container-fluid">
                <h2 className={cl.rewievsTitle}>Reviews of our students</h2>
                <Carousel/>
            </div>
        </section>
)}
