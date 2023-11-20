import React,{useState,useEffect,FC} from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import classes from './slider_styles/slider_style.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from './slider_helper/settingSlider'
import { TsliderInfo,sliderObjects } from '../../Utils/importImages'
import  { Oneslide } from './OneSlide'

export const SliderCenter:FC = ():JSX.Element => {
    return (
        <div className={classes.slider_container}>
            <Slider {...settings}>
                {
                    sliderObjects.map((item:TsliderInfo) => (
                        <Oneslide
                            key={item._id}
                            _id={item._id}
                            link={item.link}
                            alt={item.alt}
                            image={item.image}
                        />
                    ))
                }
            </Slider>
        </div>
    )
}