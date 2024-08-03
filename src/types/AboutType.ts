import { Contents } from "./GlobalType";

export type DetailContent = {
    heading: string;
    image?: string;
    body: string;
}

export interface FounderPage extends Contents {
    content: Contents
    image: string;
}

export interface OurBrandDNA extends Contents{
    image: string;
    content1 : DetailContent;
    content2: DetailContent;
    content3: DetailContent;
}

export interface OurKeyConsiderate extends Contents{
    image: string;
    content1 : DetailContent;
    content2: DetailContent;
    content3: DetailContent;
}

export interface OurMarketCustomers extends Contents{
    image: string;
    content1 : DetailContent;
    content2: DetailContent;
    content3: {
        heading: string;
        image?: string
        body: string;
        contact: string;
    };
}
