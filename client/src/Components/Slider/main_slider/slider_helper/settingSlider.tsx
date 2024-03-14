import { Settings } from "react-slick";
import { NextArrow,PrevArrow } from '../btns_slider'


const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />, 
};

export const settingsForSlidersProducts = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />, 
}

export default settings