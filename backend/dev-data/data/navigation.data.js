const navigationData = {
    logo: {
        text: "METATECH",
        href: "/"
    },

    items: [
        {
            id: "solutions",
            label: "Solutions",
            type: "mega-menu",

            children: [
                {
                    id: "custom-software",
                    title: "Custom Software Development",
                    href: "#custom-software",
                    image: "/img/solution-1.png"
                },
                {
                    id: "data-ai",
                    title: "Data + AI First Innovation",
                    href: "#data-ai",
                    image: "/img/solution-2.png"
                },
                {
                    id: "tech-staff",
                    title: "Tech Staff Augmentation",
                    href: "#tech-staffing",
                    image: "/img/solution-1.png"
                }
            ]
        },

        {
            id: "showcase",
            label: "Showcase",
            type: "link",
            href: "#showcase"
        },

        {
            id: "contact",
            label: "Contact",
            type: "link",
            href: "#contact"
        }
    ],

    cta: {
        label: "Book a meeting",
        href: "#contact"
    }
};

module.exports = navigationData;