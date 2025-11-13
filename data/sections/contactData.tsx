import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const ContactData: SectionProps = {
    wrapperCls: "section-padding",
    container: "container",
    subheading: "Contact Us",
    heading: "Ready to turn your ideas into impact? Reach out now.",
    text: "",
    promotions: [
        {
            icon: <Icons.Envelope />,
            title: "Email Us",
            text: "connect@msmehub.co.in",
        },
        {
            icon: <Icons.Phone />,
            title: "Call Now",
            text: "+91 7722021215",
        },
        {
            icon: <Icons.Location />,
            title: "302, Shree Vidya Enclave,",
            text: "Plot no. 9, S Ambazari Rd, Laxminagar, Nagpur, Maharashtra 440020",
        },
    ],
    block: {
        heading: "Make an Appointment",
        text: "Feel free to contact with us, we don't spam your email",
    },
}