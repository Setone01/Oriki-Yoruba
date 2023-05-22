import { BsFacebook, BsInstagram, BsTwitter, BsMedium } from "react-icons/bs"

import image1 from "../Assets/images/adire.jpg"
import image2 from "../Assets/images/masque.jpg"
import image3 from "../Assets/images/more.jpg"

 const Facebook = <BsFacebook size={25}/>;
 const Instagram = <BsInstagram size={25}/>;
 const Twitter = <BsTwitter size={25}/>;
 const Medium = <BsMedium size={25}/>;



export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Town",
    path: "/town",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export const Flinks = [
  {
    links: "About",
    path: "/about"
  },
  {
    links: "Town",
    path: "/town"
  },
  {
    links: "Blog",
    path: "/blog"
  },
  {
    links: "Latest",
  },
  {
    links: "Newsletter",
  },
];

export const SocialMedia = [
  {
    name: 'Facebook',
    icon: Facebook,
    link: "sdooivvhiovhv",
  },
  {
    name: 'Instagram',
    icon: Instagram,
    link: "sdooivvhiovhv",
  },
  {
    name: 'Twitter',
    icon: Twitter,
    link: "sdooivvhiovhv",
  },
  {
    name: 'Medium',
    icon: Medium,
    link: "sdooivvhiovhv",
  },
]

export const carousel = [
  {
    Image: image1
  },
  {
    Image: image2
  },
  {
    Image:image3
  },
]