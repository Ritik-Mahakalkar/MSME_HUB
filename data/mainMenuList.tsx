import Icons from "../components/Icons";
import { MenuType } from "../types/menu";

const Menus: MenuType[] = [
    {
        title: 'Home',
        path: '/',
        // dropdown: [
        //     {
        //         title: 'Home 1',
        //         path: '/'
        //     },
        //     {
        //         title: 'Home 2',
        //         path: '/home-2'
        //     },
        //     {
        //         title: 'Home 3',
        //         path: '/home-3'
        //     },
        //     {
        //         title: 'Home 4',
        //         path: '/home-4'
        //     }
        // ]
    },
    {
        title: 'About Us',
        path: '/about-us',
        dropdown: [
                    
                    {
                        title: 'Profile',
                        text: null,
                        path: '/profiles',
                        showbutton: true,
                //          dropdown: [
                    
                //     {
                //         title: 'Our Team',
                //         text: null,
                //         path: '/teams',
                //         showbutton: true,
                        
                //     },
                //     {
                //         title: 'Profiles',
                //         text: null,
                //         path: '/profiles',
                //         showbutton: true,
                        
                //     }
                // ]
                    }
                ]
    },
    {
        title: 'Services',
        path: '/services',
        megamenutwocolumn: [
             {
                title: 'FEATURED Services',
                path: '/projects',
                dropdown: [
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Business Management',
                        text: 'Enhance operations with expert business guidance.',
                        path: '/services/business-management-service',
                        showbutton: true,
                    },
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Funding Solutions',
                        text: 'Get funding support for business growth.',
                        path: '/services/funding-solutions',
                        showbutton: true,
                    },
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Global Business Solutions',
                        text: 'Expand your business globally.',
                        path: '/services/global-business-solutions',
                        showbutton: true,
                    },
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Growth Bound MSMEs',
                        text: 'Accelerate MSME growth with expert support.',
                        path: '/services/growth-bound-msmes',
                        showbutton: true,
                    },
                   
                ]
            },
            {
                title: '',
                path: '',
                dropdown: [
                    
                    {
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Business Registration & Setup',
                        text: 'Start your business with hassle-free setup.',
                        path: '/services/business-registration-setup',
                        showbutton: true,
                    },{
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Stressed MSME’s',
                        text: 'Revive and restructure financially stressed MSMEs.',
                        path: '/services/stressed-msmes',
                        showbutton: true,
                    }
                    ,{
                        imageUrl: null,
                        imageUrlMobile: null,
                        title: 'Government Schemes/Subsidy',
                        text: 'Unlock benefits from government MSME schemes.',
                        path: '/services/government-schemessubsidy',
                        showbutton: true,
                    },
                ]
            },
            // {
            //     title: 'WHY MSME HUB?',
            //     path: '/about-us',
            //     dropdown: [
            //         {
            //             imageUrl: null,
            //             imageUrlMobile: null,
            //             title: 'Become a Partner',
            //             text: 'Links customers with trusted Partners who help them realize greater value—faster—through Consulo.',
            //             path: '/teams'
            //         },
            //         {
            //             imageUrl: null,
            //             imageUrlMobile: null,
            //             title: 'Gallery',
            //             text: 'Hundreds of emerging brands thrive with Consulo. Discover their journeys.',
            //             path: '/gallery'
            //         },
            //         {
            //             imageUrl: null,
            //             imageUrlMobile: null,
            //             title: 'Services',
            //             text: 'Speed up innovation to enable quicker, effective team-driven product launches.',
            //             path: '/services'
            //         }
            //     ]
            // },
           
        ],
        // bottommenu: [
        //     {
        //         title: 'Contact Sales',
        //         path: '/contact-us',
        //         icon: <Icons.Contact />
        //     },
        //     {
        //         title: 'Watch Demo',
        //         path: '/projects/business-development',
        //         icon: <Icons.Video />
        //     },
        //     {
        //         title: 'Webinars',
        //         path: '/projects',
        //         icon: <Icons.Webinar />
        //     }
        // ]
    },
    {
        title: 'Media ',
        path: '/gallary',
        // megamenu: [
        //     {
        //         heading: 'SERVICE PAGES',
        //         path: '/services',
        //         dropdown: [
        //             {
        //                 title: 'Services',
        //                 path: '/services'
        //             },
        //             {
        //                 title: 'Service Details',
        //                 path: '/services/business-consulting'
        //             },
        //             // {
        //             //     title: 'Pricing Plan',
        //             //     path: '/pricing-plan'
        //             // }
        //         ]
        //     },
        //     {
        //         heading: 'BLOG PAGES',
        //         path: '/blogs',
        //         dropdown: [
        //             // {
        //             //     title: 'Blog',
        //             //     path: '/blogs'
        //             // },
        //             {
        //                 title: 'Blog List',
        //                 path: '/blogs-list'
        //             },
        //             {
        //                 title: 'Blog Details',
        //                 path: '/blogs/empowering-entrepreneu-fueling-growth-knowledge'
        //             }
        //         ]
        //     },
        //     {
        //         heading: 'OTHER PAGES',
        //         path: '/projects',
        //         dropdown: [
        //             {
        //                 title: 'About Us',
        //                 path: '/about-us'
        //             },
        //             {
        //                 title: 'Contact Us',
        //                 path: '/contact-us'
        //             },
        //             {
        //                 title: 'FAQ',
        //                 path: '/faq'
        //             },
        //             {
        //                 title:'Gallary',
        //                 path:'/gallary'
        //             }
        //         ]
        //     },
        //     {
        //         heading: 'PROJECTS',
        //         path: '/projects',
        //         dropdown: [
        //             {
        //                 title: 'Project List',
        //                 path: '/projects'
        //             },
        //             {
        //                 title: 'Project Details',
        //                 path: '/projects/business-development'
        //             },
        //             {
        //                 title: 'Our Team',
        //                 path: '/teams'
        //             },
        //             {
        //                 title: 'Team Details',
        //                 path: '/teams/ethan-reynolds'
        //             }
        //         ]
        //     }
        // ],
        // bottommenu: [
        //     {
        //         title: 'Contact Sales',
        //         path: '/contact-us',
        //         icon: <Icons.Contact />
        //     },
        //     {
        //         title: 'Watch Demo',
        //         path: '/projects/business-development',
        //         icon: <Icons.Video />
        //     },
        //     {
        //         title: 'Webinars',
        //         path: '/projects',
        //         icon: <Icons.Webinar />
        //     }
        // ]
    },
    {
        title: 'Blog',
        path: '/blogs',
        // dropdown: [
        //     {
        //         title: 'Blog',
        //         path: '/blogs'
        //     },
        //     {
        //         title: 'Blog Details',
        //         path: '/blogs/empowering-entrepreneu-fueling-growth-knowledge'
        //     },
        //     {
        //         title: 'Blog Style',
        //         path: '/blogs',
        //         dropdown: [
        //             {
        //                 title: 'Blog Card',
        //                 path: '/blogs'
        //             },
        //             {
        //                 title: 'Blog List',
        //                 path: '/blogs-list'
        //             }
        //         ]
        //     }
        // ]
    },
    // {
    //     title: 'Contact',
    //     path: '/contact-us'
    // }
]

export default Menus;