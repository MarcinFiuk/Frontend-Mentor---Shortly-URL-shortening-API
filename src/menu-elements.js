import FacebookIcon from './assets/icons/Facebook-icon';
import TwitterIcon from './assets/icons/Twitter-icon';
import InstagramIcon from './assets/icons/Instagram-icon';
import PinterestIcon from './assets/icons/Pinterest-icon';

export const iconsElements = [
    { id: 'icon1', icon: <FacebookIcon /> },
    { id: 'icon2', icon: <TwitterIcon /> },
    { id: 'icon3', icon: <PinterestIcon /> },
    { id: 'icon4', icon: <InstagramIcon /> },
];

export const footerElements = [
    {
        id: 'el1',
        title: 'Features',
        href: '/features',
        subMenu: [
            { id: 'el1-sub1', title: 'Link Shortening' },
            { id: 'el1-sub2', title: 'Branded Links' },
            { id: 'el1-sub3', title: 'Analytics' },
        ],
    },
    {
        id: 'el2',
        title: 'Resources',
        href: '/resources',
        subMenu: [
            { id: 'el2-sub1', title: 'Blog' },
            { id: 'el2-sub2', title: 'Developers' },
            { id: 'el2-sub3', title: 'Support' },
        ],
    },
    {
        id: 'el3',
        title: 'Company',
        href: '/company',
        subMenu: [
            { id: 'el3-sub1', title: 'About' },
            { id: 'el3-sub2', title: 'Our Team' },
            { id: 'el3-sub3', title: 'Careers' },
            { id: 'el3-sub4', title: 'Contact' },
        ],
    },
];

export const headerElements = [
    {
        id: 'el1',
        title: 'Features',
        href: '/features',
    },
    {
        id: 'el2',
        title: 'Pricing',
        href: '/pricing',
    },
    {
        id: 'el3',
        title: 'Resources',
        href: '/resources',
    },
];
