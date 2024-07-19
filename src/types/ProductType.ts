export type JewerlyType = {
    name_type: string;
    image: string;
}

export type ProductJewerly = {
    totalPrice?: number;
    name_product: string;
    name_type: string,
    image: string;
    rating: number;
    price: number;
    quantity?: number;
    desc: string;
}