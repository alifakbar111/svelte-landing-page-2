const HEADER = "Trawas View"

const NAVBAR_DATA = {
    BOOK_NOW: "Book Now",
    NAVBAR_LIST:[
        {
            id: 1,
            url: "/",
            label: "Home"
        },
        {
            id: 2,
            url: "#services",
            label: "Services"
        },
        {
            id: 3,
            url: "#pages",
            label: "Pages"
        },
        {
            id: 4,
            url: "#footer",
            label: "Contacts"
        }
    ]
};

const BANNER_DATA = {
    HEADING: "Travel More to Discover Yourself ",
    IMAGE_URL: "images/home.png",
    DESCRIPTION_LIST: [
        "Please be a traveler, not a tourist",
        "Try new things, meet new people, and see what's in front of you",
        "That is the key to understanding the wonderful world we live in",
        "Make your trip beautiful and easy",
        "Enjoy your vacation and make it easy"
    ],
    BOOK_NOW: "Book Now"
};

const SERVICES_DATA = {
    HEADING: "Our Service",
    SERVICE_LIST: [{
            LABEL: "Hotel Booking",
            IMAGE_URL: "images/service1.svg"
        },
        {
            LABEL: "Destination Booking",
            IMAGE_URL: "images/service2.svg"
        },
        {
            LABEL: "Transportation",
            IMAGE_URL: "images/service3.svg"
        }
    ]
};

const PAGES_RECOMENDED_DATA = {
    HEADING: "Recomended Destination",
    DESTINATION_LIST: [{
        LABEL: "Waterfall",
        IMAGE_URL: "images/service1.png"
    }, {
        LABEL: "Hotel",
        IMAGE_URL: "images/service1.png"
    }, {
        LABEL: "Mountain",
        IMAGE_URL: "images/service1.png"
    }]
};

const TESTIMONIALS_DATA = {
    HEADING: "Testimoni",
    TESTIMONIAL_LIST: [{
            DESCRIPTION: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            IMAGE_URL: "images/user1.jpg",
            NAME: "Jean Doe"
        },
        {
            DESCRIPTION: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            IMAGE_URL: "images/user2.jpg",
            NAME: "John Doe"
        },
    ]
};

const FOOTER_DATA = {
    DESCRIPTION: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    CONTACT_DETAILS: {
        HEADING: "Contact us",
        ADDRESS: "Penanggungan Street, Phone Trawas Mojokerto",
        MOBILE: "+6285791327189",
    }
};
const MOCK_DATA = {
    HEADER,
    NAVBAR_DATA,
    BANNER_DATA,
    SERVICES_DATA,
    PAGES_RECOMENDED_DATA,
    TESTIMONIALS_DATA,
    FOOTER_DATA
};

export default MOCK_DATA;