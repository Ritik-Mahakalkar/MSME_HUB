export interface MenuType {
    title: string;
    path: string;
    dropdown?: Array<MenuType> | boolean;
    megamenu?: Array<{
        heading: string;
        path: string;
        dropdown?: Array<MenuType>;
    }>;
    megamenutwocolumn?: Array<{
        title: string;
        path: string;
        dropdown?: Array<MenuType>;
    }>;
    bottommenu?: Array<{
        title: string;
        path: string;
        icon?: any;
    }>;
    text?: string | null; 
    showbutton?: boolean; 
    altText?: string; 
    imageUrl?: string | null; 
    imageUrlMobile?: string | null;
    icon?: any;
}
