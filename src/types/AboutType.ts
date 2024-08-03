import { Contents } from "./GlobalType";

export interface FounderPage extends Contents {
    content: Contents
    image: string;
}

export interface OurBrandDNA extends Contents{
    image: string;
    content1 : Contents;
    content2: Contents;
    content3: Contents;
}

export interface OurKeyConsiderate extends Contents{
    image: string;
    content1 : Contents;
    content2: Contents;
    content3: Contents;
}

export interface OurMarketCustomers extends Contents{
    image: string;
    content1 : Contents;
    content2: Contents;
    content3: {
        heading: string;
        body: string;
        contact: string;
    };
}
