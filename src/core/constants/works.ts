import bsw from "../../assets/logo/works/bsw.png";
import plm from "../../assets/logo/works/plm.png";
import crmonline from "../../assets/logo/works/crmonline.png";
import arcanys from "../../assets/logo/works/arcanys.png";
import priceme from "../../assets/logo/works/priceme.jpeg";
import { Work } from "../interfaces/works.interface";

export const WORKS: Work[] = [
    {
        image: plm,
        link: "https://plm.edu.ph/",
        active: false,
    },
    {
        image: bsw,
        link: "https://www.business-switch.com.au/",
        active: true,
    },
    {
        image: crmonline,
        link: "https://www.crmonline.com.au/",
        active: true,
    },
    {
        image: priceme,
        link: "https://priceme.game/",
        active: true,
    },
    {
        image: arcanys,
        link: "https://arcanys.com/",
        active: true,
    },
];