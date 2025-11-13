// import { SectionProps } from "@/types/sectionProps";
// import WhyChooseUsBg from "@/public/img/why-choose-us/bg.jpg";
// import WhyChooseUsImage from "@/public/img/why-choose-us/1.jpg";
// import WhyChooseUsImageMobile from "@/public/img/why-choose-us/1.jpg";
// import PromoImage from "@/public/img/why-choose-us/2.jpg";
// import Icons from "@/components/Icons";

// export const WhyChooseUsGridBgData: SectionProps = {
//     wrapperCls: "!bg-transparent mt-100 section-padding",
//     container: "container",
//     backgroundImage: {
//         src: WhyChooseUsBg.src,
//         width: 1920,
//         height: 887,
//         loading: "lazy",
//         alt: "Background image"
//     },
//     image: {
//         src: WhyChooseUsImage.src,
//         srcMobile: WhyChooseUsImageMobile.src,
//         width: 1000,
//         height: 742,
//         loading: "lazy",
//         alt: "Choose us image"
//     },
//     subheading: "Why Choose Us",
//     heading: "Supporting Growth on a Global Scale",
//     text: "We provide dependable and tailored consulting services that help your business navigate challenges, seize opportunities.",
//     button: {
//         label: "More About Us",
//         href: "/about-us",
//         type: "primary"
//     },
//     rotatingLogo: {
//         logo: <Icons.ChooseRotatingLogo />,
//         text: "25",
//     },
//     promotions: [
//         {
//             icon: <Icons.Mission />,
//             title: "Our Mission",
//             text: "Our mission is push engage boundaries, enga audiences, and driv engage.",
//         },
//         {
//             icon: <Icons.Vision />,
//             title: "Our Vision",
//             text: "Our mission is push engage boundaries, enga audiences, and driv engage.",
//         },
//         {
//             icon: <Icons.Awards />,
//             title: "Our Awards",
//             text: "Our mission is push engage boundaries, enga audiences, and driv engage.",
//         },
//     ],
//     promoImage: {
//         src: PromoImage.src,
//         width: 800,
//         height: 834,
//         loading: "lazy",
//         alt: "Choose us image"
//     },
// }


import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsBg from "@/public/img/why-choose-us/back.jpg";
import WhyChooseUsImage from "@/public/img/why-choose-us/d.avif";
import WhyChooseUsImageMobile from "@/public/img/why-choose-us/575.jpg";
import PromoImage from "@/public/img/why-choose-us/b.jpg";
import Icons from "@/components/Icons";

export const WhyChooseUsGridBgData: SectionProps = {
    wrapperCls: "!bg-transparent mt-100 section-padding",
    container: "container",
    backgroundImage: {
        src: WhyChooseUsBg.src,
        width: 1920,
        height: 887,
        loading: "lazy",
        alt: "Background image"
    },
    image: {
        src: WhyChooseUsImage.src,
        srcMobile: WhyChooseUsImageMobile.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Supporting growth image"
    },
    subheading: "Why Choose Us",
    heading: "One-Stop Growth Partner for MSMEs & Investors",
    text: "With a leadership team of chartered professionals and over 100 years’ combined experience, MSME Hub supports businesses and investors through funding, compliance, growth or turnaround strategies. We’re committed to your long-term success.",
    button: {
        label: "Learn More About Us",
        href: "/about-us",
        type: "primary"
    },
    rotatingLogo: {
        logo: <Icons.ChooseRotatingLogo />,
        text: "2",
    },
    promotions: [
        {
            icon: <Icons.Mission />,
            title: "Our Mission",
            text: "To build financially resilient businesses and empowered investors by delivering strategic clarity, tailored solutions and lasting improvement."
        },
        {
            icon: <Icons.Vision />,
            title: "Our Vision",
            text: "To be the trusted growth partner for every MSME — from startup to stressed asset to global expansion — and create sustainable value for all stakeholders."
        },
        {
            icon: <Icons.Awards />,
            title: "Our Expertise",
            text: "Led by CAs, MBAs, advocates and industry mentors, we offer comprehensive services across funding, subsidies, restructuring & global business solutions."
        },
    ],
    promoImage: {
        src: PromoImage.src,
        width: 800,
        height: 834,
        loading: "lazy",
        alt: "Business consultancy illustration"
    },
}
