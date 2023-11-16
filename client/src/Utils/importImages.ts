import image1 from './images/slider_images/first_image_actions.jpg'
import image2 from './images/slider_images/second_image_actions.jpg'
import image3 from './images/slider_images/third_image_tv.jpg'
import image4 from './images/slider_images/fourth_image_smartphones.jpg'
import image5 from './images/slider_images/fifth_image_tv.jpg'
import image6 from './images/slider_images/sixth_image_smartphones.jpg'
import image7 from './images/slider_images/seventh_image_dry.jpg'
import image8 from './images/slider_images/eightth_image_fridges.jpg'
import { generateRandomString } from './ArrayHelper/brandsArray'

export type TsliderInfo = {
    _id:string,
    image:string,
    link:string,
    alt:string,
}

export const sliderObjects:TsliderInfo[] = [
    {
        _id:generateRandomString(),
        image:image1,
        link:'/sales-friday',
        alt:'friday-sales'
    },
    {
        _id:generateRandomString(),
        image:image2,
        link:'/washmachine-LG-F2J6HSDW',
        alt:'washing-machine-LG'
    },
    {
        _id:generateRandomString(),
        image:image3,
        link:'/tv/haier-h65S9UG-PRO',
        alt:'tv-haier'
    },
    {
        _id:generateRandomString(),
        image:image4,
        link:'/smartphones/redmi-12-128gb',
        alt:'smartphones-xiomi'
    },
    {
        _id:generateRandomString(),
        image:image5,
        link:'/tv/LG-65NANO766QA',
        alt:'tv-LG'
    },
    {
        _id:generateRandomString(),
        image:image6,
        link:'/smartphones/infinix30-HOT',
        alt:'smartphones-infinix'
    },
    {
        _id:generateRandomString(),
        image:image7,
        link:'/polaris',
        alt:'actions-polaris'
    },
    {
        _id:generateRandomString(),
        image:image8,
        link:'/fridges/Haier-C4F640CXU1',
        alt:'fridges-haier'
    },
]
