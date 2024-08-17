import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { ServiceStepsInterface } from "./modes";

export const socials = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/apexautoapp",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/apexautoapp"
  },
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@apexautoapp"
  },
  // {
  //   icon: <FaLinkedinIn />,
  //   link: "/",
  // },
  // {
  //   icon: <FaTelegramPlane />,
  //   link: "/",
  // },
];


export const nearestShops = [
  {
    name: "Momo's Garage",
    description: "Formally Rob Black Automotive, Momo’s Garage continues the tradition of providing reliable high-quality workmanship using licensed technicians who care. We service all makes and models. ",
    images: ["/images/nearest-shop/1.png", "/images/nearest-shop/2.png", "/images/nearest-shop/3.png"],
    bookingLink: "https://apexautoapp.com/momosgarage",
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
    hours: ['Monday to Friday - 8 AM - 5 PM'],
    location: "https://www.google.com/maps/place/Momo's+Garage+Inc./@43.6069665,-79.5799426,17z/data=!3m2!4b1!5s0x882b47ec5db06631:0xf4b8ceb27e8ccc41!4m6!3m5!1s0x882b47ec8b1a501b:0xb59a799995c5bd50!8m2!3d43.6069665!4d-79.5799426!16s%2Fg%2F1tcv6z1v?entry=ttu"
  },

  {
    name: "Euromatic",
    description: "We specialize in servicing top European brands like Mercedes, BMW, Audi, Jaguar and more.",
    images: ["/images/nearest-shop/3.png", "/images/nearest-shop/2.png", "/images/nearest-shop/1.png"],
    bookingLink: "https://apexautoapp.com/euromatic",
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
    hours: ['Monday to Friday - 9 AM–6:30 PM', 'Saturday - 9 AM–3 PM'],
    location: "https://www.google.com/maps/place/Euromatic+Auto+Repair/@43.6655288,-79.6450248,17z/data=!3m1!4b1!4m6!3m5!1s0x882b3e1eb0ac9321:0x90b3aadf55051c45!8m2!3d43.6655288!4d-79.6450248!16s%2Fg%2F11c3sw1tm1?entry=ttu"
  },

  {
    name: "Dundas 427 Automotive",
    description: "Since 1998, Dundas 427 Automotive has taken pride in providing you with honest and efficient auto repair service in the Mississauga area.  We are a family owned and operated business and our priority is exceeding your expectations. We service all makes and models. ",
    images: ["/images/nearest-shop/2.png", "/images/nearest-shop/3.png", "/images/nearest-shop/1.png"],
    bookingLink: "https://apexautoapp.com/dundas427",
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
    hours: ['Monday to Friday - 8 AM–6 PM'],
    location: "https://www.google.com/maps/place/Dundas+427+Automotive/@43.6221264,-79.5721785,17z/data=!3m2!4b1!5s0x882b380883330af5:0x4bf04ae0f64ae66e!4m6!3m5!1s0x882b380647a8bcc5:0x84d17cc6cbf8c3c0!8m2!3d43.6221264!4d-79.5721785!16s%2Fg%2F1tdyw_h2?entry=ttu"
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


export const appLinks = {
  ios: "https://apps.apple.com/in/app/apex-auto/id64693384384",
  android: "https://play.google.com/store/apps/details?id=com.apex.customerapp&hl=en_US"
}
