import { SectionProps } from "@/types/sectionProps";
import Image1 from "@/public/img/brand/b11.png";
import Image2 from "@/public/img/brand/b12.png";
import Image3 from "@/public/img/brand/b13.webp";
import Image4 from "@/public/img/brand/b14.webp";
import Image5 from "@/public/img/brand/b15.png";

export const ScrollingTextData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",     
    imageList: [        
        {
            src: Image1.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image2.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image3.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image4.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        },
        {
            src: Image5.src,
            alt: "Scrolling image",
            width: 108,
            height: 36,
            loading: "lazy",
            href: "/about-us"
        }
    ],
}
