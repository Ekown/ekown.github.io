import bsw from "../../assets/logo/works/bsw.png";
import plm from "../../assets/logo/works/plm.png";
import crmonline from "../../assets/logo/works/crmonline.png";
import arcanys from "../../assets/logo/works/arcanys.png";
import priceme from "../../assets/logo/works/priceme.jpeg";
import { Work } from "../interfaces/works.interface";

export const WORKS: Work[] = [
    {
        image: plm,
        name: "Pamantasan ng Lungsod ng Maynila",
        link: "https://plm.edu.ph/",
        active: false,
        current: false,
    },
    {
        image: bsw,
        name: "Business Switch",
        link: "https://www.business-switch.com.au/",
        active: true,
        current: false,
    },
    {
        image: crmonline,
        name: "CRM Online",
        link: "https://www.crmonline.com.au/",
        active: true,
        current: false,
    },
    {
        image: priceme,
        name: "PriceMe",
        link: "https://priceme.game/",
        active: true,
        current: false,
    },
    {
        image: arcanys,
        name: "Arcanys",
        link: "https://arcanys.com/",
        active: true,
        current: true,
    },
];