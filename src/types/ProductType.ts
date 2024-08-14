export type JewerlyType = {
    name_type: string;
    image: string;
    video?: string;
    type: string;
    description: string;
}

type jewerlyDesc = {
    grading: string;
    size: string[];
}

export type ProductJewerly = {
    totalPrice?: any;
    name_product: string;
    name_type: string,
    slug_type: string;
    image: string[];
    video: string;
    price: number;
    quantity?: number;
    desc: string;
    detail_jewerly: jewerlyDesc;
}