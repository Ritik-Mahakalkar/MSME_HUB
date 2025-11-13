import path from "path";
import Icons from "../components/Icons";

export const MenuService = {
    //title: "About MSME Hub",
    
    menus: [
        {
            title: "Our Services",
            path: "/services"
        },
        {
            title: "Our Blogs",
            path: "/blogs"
        },
        {
            title: "Our Gallery",
            path: "/gallery"
        },
        {
            title: "Our Teams",
            path: "/teams"
        },
        {
            title: "Contact Us",
            path: "/contact-us"
        }
        
    ]
}

export const MenuContact = {
    title: "Quick Contact",
    menus: [
        {
            title: "302, Shree Vidya Enclave, Plot no. 9,S Ambazari Rd, Laxminagar, Nagpur,Maharashtra 440020",
            path: null,
            icon: <Icons.Location />
        },
        {
            title: "+917722021215",
            path: "tel:+917722021215",
            icon: <Icons.Phone />
        },
        {
            title: "connect@msmehub.co.in",
            path: "mailto:connect@msmehub.co.in",
            icon: <Icons.Envelope />
        }
    ]
}
