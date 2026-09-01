import { CalendarDays, FileStack, HandPlatter, HeartX, Home, MessageSquareReply, MessagesSquare, UserShield } from "lucide-react";
import { ApplicationType, MenuLinkType, StatCardType } from "./types";

export const Menu: MenuLinkType[] = [
    { name: 'dashboard', icon: Home, href: '/' },
    { name: 'apps', icon: FileStack, href: '/apps' },
    { name: 'calendar', icon: CalendarDays, href: '/calendar' },
    { name: 'profile', icon: UserShield, href: '/profile' }
]

export const StatCards: StatCardType[] = [
    { name: 'applications', icon: FileStack },
    { name: 'responses', icon: MessageSquareReply },
    { name: 'interviews', icon: MessagesSquare },
    { name: 'offers', icon: HandPlatter },
    { name: 'rejected', icon: HeartX }
]

export const Applications: ApplicationType[] = [
    {
        domain: "tcs.com",
        role: "Frontend Developer",
        org: "TCS",
        status: "Applied",
        appliedDate: "28 Aug 2026",
    },
    {
        domain: "infosys.com",
        role: "React Developer",
        org: "Infosys",
        status: "Interview",
        appliedDate: "25 Aug 2026",
    },
    {
        domain: "razorpay.com",
        role: "Frontend Engineer",
        org: "Razorpay",
        status: "Applied",
        appliedDate: "22 Aug 2026",
    },
    {
        domain: "zomato.com",
        role: "Full Stack Developer",
        org: "Zomato",
        status: "Rejected",
        appliedDate: "18 Aug 2026",
    },
    {
        domain: "swiggy.com",
        role: "Software Engineer",
        org: "Swiggy",
        status: "Interview",
        appliedDate: "15 Aug 2026",
    },
    {
        domain: "phonepe.com",
        role: "Frontend Developer",
        org: "PhonePe",
        status: "Applied",
        appliedDate: "12 Aug 2026",
    },
];