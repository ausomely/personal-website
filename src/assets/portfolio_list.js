import warcraft_img from '../images/game-room.png'
import davis_deals_img from '../images/davis-deals.png'
import pong_img from '../images/pong.png'
import personal_site_img from '../images/personal-site.png'


const portfolio_list = [
    {
        name: 'WARCRAFT II SERVER', 
        description: 'A boost asio server that hosts up to 4 human players in a custom match',
        img_src: warcraft_img,
        url_link: 'https://github.com/ausomely/w2-multiplayer-support'
    },
    {
        name: 'DAVIS DEALS',
        description: 'Get the latest weekly restuarant and bar deals in Davis',
        img_src: davis_deals_img,
        url_link: 'https://github.com/ausomely/davis-deals'
    },
    {
        name: 'PONG AI', 
        description: 'Play pong against a trained Q learning AI',
        img_src: pong_img,
        url_link: 'https://github.com/ausomely/q-learning-pong' 
    },
    {
        name: 'PERSONAL SITE', 
        description: 'You\'re looking right at it',
        img_src: personal_site_img,
        url_link: 'https://github.com/ausomely/personal-website'
    },   
];

export default portfolio_list;