export interface GallaryType {
    slug?: string;
    title?: string;
    category?: string;
    client?: string;
    owner?: string;
    starting_date?: string;
    ending_date?: string;
    created_at?: string;
    website?: string;
    content?: string;
    image?: string;
}

export interface GallaryDataType {
    data: GallaryType;
}

