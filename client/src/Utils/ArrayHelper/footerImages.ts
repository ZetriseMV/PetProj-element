
import facebookImage from '../images/icons/facebook.webp'
import instagramImage from '../images/icons/instagram.png'
import telegramImage from '../images/icons/telegram.webp'
import vkImage from '../images/icons/vk.png'
import youtubeImage from '..//images/icons/youtube.png'
import { generateRandomString } from "../../Utils/ArrayHelper/brandsArray";

export type TimageArrayWeb = {
    id:string,
    image:string,
    link:string,
    src:string
}

export const imagesArray:TimageArrayWeb[] = [
    {
        id:generateRandomString(),
        image:facebookImage,
        link:'https://www.facebook.com/5ElementBelarus',
        src:'facebook_icon_link'
    },
    {
        id:generateRandomString(),
        image:instagramImage,
        link:'https://www.instagram.com/5elementbelarus',
        src:'instagram_icon_link'
    },
    {
        id:generateRandomString(),
        image:telegramImage,
        link:'https://t.me/fivelementbelarus',
        src:'telegram_icon_link'
    },
    {
        id:generateRandomString(),
        image:vkImage,
        link:'https://vk.com/5elementbelarus',
        src:'vk_icon_link'
    },
    {
        id:generateRandomString(),
        image:youtubeImage,
        link:'https://www.youtube.com/user/5elementBelarus',
        src:'youtube_icon_link'
    }
];