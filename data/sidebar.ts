export type SidebarItemProps = {
    name: string;
    link: string;
    title: string;
    icon: string;
}

const sidebarItems: SidebarItemProps[] = [
    {
        name: "checkers",
        link: "checkers",
        title: "Checkers",
        icon: "\u26c1"
    },
    {
        name: "chess",
        link: "chess",
        title: "Chess",
        icon: "\u2654"
    },
    {
        name: "domino",
        link: "domino",
        title: "Domino",
        icon: "\u{1F084}"
    },
    
    {
        name: "truco",
        link: "truco",
        title: "Truco",
        icon: "\u{1F0D4}"
    },
]

export {
    sidebarItems,    
}