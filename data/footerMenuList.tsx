interface MenuType {
  title: string;
  path: string;
}

export const QuickLink: MenuType[] = [
    {
        title: 'About Us',
        path: '/about-us'
    },
    {
        title: 'Our Team',
        path: '/teams'
    },
    {
        title: 'Our Projects',
        path: '/projects'
    },
    {
        title: 'Blogs',
        path: '/blogs'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    }
];

export const Services: MenuType[] = [
    {
        title: 'MSME solutions',
        path: '/services'
    },
    {
        title: 'Business Management Services',
        path: '/services/business-management-service'
    },
    {
        title: 'Funding Solutions',
        path: '/services/funding-solutions'
    },
    {
        title: 'Global Business Solutions',
        path: '/services/global-business-solutions'
    },
    {
        title: 'Government Schemes/Subsidy',
        path: '/services/government-schemessubsidy'
    }
];

export const Information: MenuType[] = [
    // {
    //     title: 'Working Process',
    //     path: '/services'
    // },
    {
        title: 'Privacy Policy',
        path: '/privacy-policy'
    },
    {
        title: 'Terms & Conditions',
        path: '/terms-condition'
    },
    {
        title: 'FAQ',
        path: '/faq'
    }
];

export const MenuPolicies: MenuType[] = [
    {
        title: 'Privacy Policy',
        path: '/privacy-policy'
    },
    {
        title: 'FAQ',
        path: '/faq'
    },
    {
        title: 'Contact',
        path: '/contact-us'
    }
];
