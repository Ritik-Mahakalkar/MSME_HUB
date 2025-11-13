// export interface ServiceListProps {
//     title: string;
// }

// export interface ServiceProps {
//     id: number;
//     slug?: string;
//     image?: string;
//     icon?: string;
//     title?: string;
//     description?: string;
//     content?: string;
//     list?: ServiceListProps[];
//     created_at?: string;
// }

// export interface ServiceDataType {
//     data: ServiceProps;
// }



// For each item in the "list" array
export interface ServiceListProps {
  title: string;
}

// For each accordion item
export interface ServiceAccordionItem {
  title: string;
  text: string;
}

// Main service data structure
export interface ServiceProps {
  id: number;
  slug?: string;
  image?: string;
  icon?: string;
  title?: string;
  description?: string;
  content?: string;
  list?: ServiceListProps[];
  created_at?: string;
  ServiceAccordionData?: ServiceAccordionItem[]; // ✅ Added this field
}

// For wrapping data responses
export interface ServiceDataType {
  data: ServiceProps;
}
