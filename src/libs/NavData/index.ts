import { NavProps, SocialMedia, SubMenu } from "@/types/NavbarTypes";
import { jewerlyType } from "../ProductData/ProductData";
import { list } from "postcss";

export const navData:NavProps[] = [
    {
        pages: "About Us",
        link: "#",
        subMenu: [
            {
                name_menu: "Our Brand DNA",
                link: "about-us/our-brand-dna"
            },
            {
                name_menu: "Our Key Considerations",
                link: "about-us/our-key-considerations"
            },
            {
                name_menu: "Our Market & Customers",
                link: "about-us/our-market-and-customers"
            },
            {
                name_menu: "Our Founder & CEO",
                link: "about-us/our-founder-and-ceo"
            },
            {
                name_menu: "Contact Us",
                link: "about-us/contact-us"
            },
        ]
    },
    {
        pages: "Pearl Education",
        link: "#",
        subMenu: [
            {
                name_menu: "About Pearls",
                link: "/pearl-education/necklare-length"
            },
            {
                name_menu: "Pearl Types",
                link: "/pearl-education/pearl-types"
            },
            {
                name_menu: "Pearl Grading",
                link: "/pearl-education/pearl-grading"
            },
            {
                name_menu: "Pearl Sizing",
                link: "#"
            },
            {
                name_menu: "Pearl Color",
                link: "/pearl-education/pearl-color"
            },
            {
                name_menu: "Necklare Lengths",
                link: "/pearl-education/necklare-length"
            },
        ]
    },
    {
        pages: "Occasions",
        link: "#",
        subMenu: [
            {
                name_menu: "Anniversaries",
                link: "/occasions/anniversaries"
            },
            {
                name_menu: "Birthdays",
                link: "/occasions/birthdays"
            },
            {
                name_menu: "Holidays",
                link: "/occasions/holidays"
            },
            {
                name_menu: "Weddings",
                link: "/occasions/weddings"
            },
        ]
    },
]

export const occationData:SubMenu[] = [
    {
        name_menu: "Anniversaries",
        link: "/occasions/anniversaries"
    },
    {
        name_menu: "Birthdays",
        link: "/occasions/birthdays"
    },
    {
        name_menu: "Holidays",
        link: "/occasions/holidays"
    },
    {
        name_menu: "Weddings",
        link: "/occasions/weddings"
    },
]

export const pearlEducationData:SubMenu[] = [
    {
        name_menu: "Pearl Types",
        link: "/pearl-education/pearl-types"
    },
    {
        name_menu: "Pearl Grading",
        link: "/pearl-education/pearl-grading"
    },
    {
        name_menu: "Pearl Sizing",
        link: "#"
    },
    {
        name_menu: "Pearl Color",
        link: "/pearl-education/pearl-color"
    },
    {
        name_menu: "Necklare Lengths",
        link: "/pearl-education/necklare-length"
    },
]

export const aboutUsData:SubMenu[] = [
    {
        name_menu: "Our Brand DNA",
        link: "about-us/our-brand-dna"
    },
    {
        name_menu: "Our Key Considerations",
        link: "about-us/our-key-considerations"
    },
    {
        name_menu: "Our Market & Customers",
        link: "about-us/our-market-and-customers"
    },
    {
        name_menu: "Our Founder & CEO",
        link: "about-us/our-founder-and-ceo"
    },
    {
        name_menu: "Contact Us",
        link: "about-us/contact-us"
    },
]

export const customerSupport:SubMenu[] = [
    {
        name_menu: "FAQ",
        link: "#"
    },
    {
        name_menu: "Shipping",
        link: "#"
    },
    {
        name_menu: "Feedback",
        link: "#"
    },
    {
        name_menu: "Payment Method",
        link: "#"
    },
]

export const socialMedia:SocialMedia[] = [
    {
        icon: "instagram.svg",
        link: 'https://instagram.com'
    },
    {
        icon: "tiktok.svg",
        link: 'https://tiktok.com'
    },
    {
        icon: "youtube.svg",
        link: 'https://youtube.com'
    },
]

