import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ServiceStepsInterface } from "./modes";

export const socials = [
  {
    icon: <FaLinkedinIn />,
    link: "/",
  },
  {
    icon: <FaInstagram />,
    link: "/",
  },
  {
    icon: <FaXTwitter />,
    link: "/",
  },
  {
    icon: <FaTelegramPlane />,
    link: "/",
  },
];


export const nearestShops = [
  {
    name: "Momos Garage",
    description: "Formally Rob Black Automotive, Momo’s Garage continues the tradition of providing reliable high-quality workmanship using licensed technicians who care. We service all makes and models. ",
    images: ["/images/nearest-shop/1.png", "/images/nearest-shop/2.png", "/images/nearest-shop/3.png"],
    services: [
      {
        icon: "/images/nearest-shop/services/1.svg",
        name: "Brakes"
      },
      {
        icon: "/images/nearest-shop/services/2.svg",
        name: "Diagnostics & <br/> Inspection"
      },
      {
        icon: "/images/nearest-shop/services/3.svg",
        name: "Fluid <br> Services"
      },
      {
        icon: "/images/nearest-shop/services/4.svg",
        name: "General <br> Maintenance"
      },
      {
        icon: "/images/nearest-shop/services/5.svg",
        name: "Starting & <br> Charging"
      },
      {
        icon: "/images/nearest-shop/services/6.svg",
        name: "Steering & <br> Suspension"
      },
      {
        icon: "/images/nearest-shop/services/7.svg",
        name: "Wheels & <br> Tires"
      },
    ],
    hours: ['Monday to Friday - 9 AM–6:30 PM', 'Saturday - 9 AM–3 PM', ''],
    location: ""
  },
  {
    name: "Euromatic",
    description: "We specialize in servicing top European brands like Mercedes, BMW, Audi, Jaguar and more.",
    images: ["/images/nearest-shop/3.png", "/images/nearest-shop/2.png", "/images/nearest-shop/1.png"],
    services: [
      {
        icon: "/images/nearest-shop/services/1.svg",
        name: "Brakes"
      },
      {
        icon: "/images/nearest-shop/services/2.svg",
        name: "Diagnostics & <br> Inspection"
      },
      {
        icon: "/images/nearest-shop/services/3.svg",
        name: "Fluid <br> Services"
      },
      {
        icon: "/images/nearest-shop/services/4.svg",
        name: "General <br> Maintenance"
      },
      {
        icon: "/images/nearest-shop/services/5.svg",
        name: "Starting & <br> Charging"
      },
      {
        icon: "/images/nearest-shop/services/6.svg",
        name: "Steering & <br> Suspension"
      },
      {
        icon: "/images/nearest-shop/services/7.svg",
        name: "Wheels & <br> Tires"
      },
    ],
    hours: ['Monday to Friday - 9 AM–6:30 PM', 'Saturday - 9 AM–3 PM', ''],
    location: ""
  },
  {
    name: "Dundas 427 Automotive",
    description: "Since 1998, Dundas 427 Automotive has taken pride in providing you with honest and efficient auto repair service in the Mississauga area.  We are a family owned and operated business and our priority is exceeding your expectations. We service all makes and models. ",
    images: ["/images/nearest-shop/2.png", "/images/nearest-shop/3.png", "/images/nearest-shop/1.png"],
    services: [
      {
        icon: "/images/nearest-shop/services/1.svg",
        name: "Brakes"
      },
      {
        icon: "/images/nearest-shop/services/2.svg",
        name: "Diagnostics & <br> Inspection"
      },
      {
        icon: "/images/nearest-shop/services/3.svg",
        name: "Fluid <br> Services"
      },
      {
        icon: "/images/nearest-shop/services/4.svg",
        name: "General <br> Maintenance"
      },
      {
        icon: "/images/nearest-shop/services/5.svg",
        name: "Starting & <br> Charging"
      },
      {
        icon: "/images/nearest-shop/services/6.svg",
        name: "Steering & <br> Suspension"
      },
      {
        icon: "/images/nearest-shop/services/7.svg",
        name: "Wheels & <br> Tires"
      },
    ],
    hours: ['Monday to Friday - 9 AM–6:30 PM', 'Saturday - 9 AM–3 PM', ''],
    location: ""
  },
]


export const serviceSteps: ServiceStepsInterface[] = [
  {
    benefits: [
      {
        title: "Easy Scheduling",
        description: "Find available time slots and book with just a few taps."
      },
      {
        title: "Wide Variety of Shops",
        description: "Choose from a range of trusted repair shops that suit your needs."
      },
      {
        title: "Appointment Reminders",
        description: "Get timely notifications so you never miss your scheduled service."
      },
    ],
    title: "Book appointments",
    image: "/images/restyle/1.png",
  },
  {
    benefits: [
      {
        title: "Instant messaging",
        description: "Chat with mechanics in real-time for questions or to get updates on your vehicle."
      },
      {
        title: "Photo Sharing",
        description: "Send images of your car’s problem for a more accurate diagnosis."
      },
      {
        title: "Fast Responses",
        description: "Get quick answers to your questions without waiting on hold."
      },
    ],
    title: "Message mechanics",
    image: "/images/restyle/2.png",
  },
  {
    benefits: [
      {
        title: "Comprehensive Records",
        description: "Access all past services and repairs for all your vehicles in one place."
      },
      {
        title: "Scheduled Reminders",
        description: "Get alerts for upcoming maintenance based on your service history. "
      },
      {
        title: "Digital Invoices",
        description: "Say goodbye to paper clutter—access and manage all your repair invoices in one convenient place."
      },
    ],
    title: "Track Vehicle Service History",
    image: "/images/restyle/3.png",
  },
  {
    benefits: [
      {
        title: "Transparent Pricing",
        description: "Compare estimates from multiple shops before choosing."
      },
      {
        title: "No Hidden Costs",
        description: "Get upfront pricing with no unexpected surprises."
      },
      {
        title: "Personalized Quotes",
        description: "Receive estimates tailored to your specific needs."
      },
    ],
    title: "Request Estimates",
    image: "/images/restyle/4.png",
  },
  {
    benefits: [
      {
        title: "Real-Time Updates",
        description: "Stay informed with progress notifications from your mechanic."
      },
      {
        title: "Digital Approvals",
        description: "Eliminate the hassle of phone calls—review, approve, or decline additional services directly from your device, complete with photos and videos for full transparency in your repair process"
      },
      {
        title: "Estimated Completion Time",
        description: "Know exactly when your car will be ready, so you can plan your day with confidence."
      },
    ],
    title: "Track Your Car’s Status",
    image: "/images/restyle/5.png",
  },
]