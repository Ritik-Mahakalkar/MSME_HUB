export interface ProjectType {
    slug?: string;
    title?: string;
    category?: string;
    client?: string;
    owner?: string;
    starting_date?: string  | null;
    ending_date?: string  | null;
    created_at?: string;
    website?: string;
    content?: string;
    image?: string;
}

export interface ProjectDataType {
    data: ProjectType;
}

