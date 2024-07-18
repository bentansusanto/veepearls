import { NavProps } from "@/types/NavbarTypes";

export const navData:NavProps[] = [
    {
        pages: "About Us",
        link: "#",
        subMenu: [
            {
                name_menu: "Blog",
                link: "/"
            }
        ]
    },
    {
        pages: "Pearl Education",
        link: "#",
        subMenu: [
            {
                name_menu: "Pearl Types",
                link: "/"
            },
            {
                name_menu: "Pearl Grading",
                link: "/"
            },
            {
                name_menu: "Pearl Sizing",
                link: "/"
            },
            {
                name_menu: "Pearl Color",
                link: "/"
            },
            {
                name_menu: "Necklare Lengths",
                link: "/"
            },
        ]
    },
    {
        pages: "Occasions",
        link: "#",
        subMenu: [
            {
                name_menu: "Anniversaries",
                link: "/"
            },
            {
                name_menu: "Birthdays",
                link: "/"
            },
            {
                name_menu: "Holidays",
                link: "/"
            },
            {
                name_menu: "Weddings",
                link: "/"
            },
        ]
    },
]

