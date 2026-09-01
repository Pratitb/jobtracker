import { CalendarDays, FileStack, HandPlatter, HeartX, Home, MessageSquareReply, MessagesSquare, UserShield } from "lucide-react";
import { ApplicationType, MenuLinkType, StatCardType } from "./types";

export const Menu: MenuLinkType[] = [
    { name: 'dashboard', icon: Home, href: '/' },
    { name: 'applications', icon: FileStack, href: '/applications' },
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

export const applicationData: ApplicationType[] = [
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
    {
        domain: "flipkart.com",
        role: "Software Engineer",
        org: "Flipkart",
        status: "Applied",
        appliedDate: "10 Aug 2026",
    },
    {
        domain: "paytm.com",
        role: "Frontend Engineer",
        org: "Paytm",
        status: "Interview",
        appliedDate: "08 Aug 2026",
    },
    {
        domain: "cred.club",
        role: "React Developer",
        org: "CRED",
        status: "Rejected",
        appliedDate: "05 Aug 2026",
    },
    {
        domain: "freshworks.com",
        role: "Frontend Developer",
        org: "Freshworks",
        status: "Applied",
        appliedDate: "02 Aug 2026",
    },
    {
        domain: "groww.in",
        role: "Software Engineer",
        org: "Groww",
        status: "Interview",
        appliedDate: "30 Jul 2026",
    },
    {
        domain: "meesho.com",
        role: "Full Stack Developer",
        org: "Meesho",
        status: "Applied",
        appliedDate: "27 Jul 2026",
    },
    {
        domain: "olaelectric.com",
        role: "Frontend Engineer",
        org: "Ola Electric",
        status: "Rejected",
        appliedDate: "24 Jul 2026",
    },
    {
        domain: "zerodha.com",
        role: "UI Engineer",
        org: "Zerodha",
        status: "Applied",
        appliedDate: "20 Jul 2026",
    },
    {
        domain: "dream11.com",
        role: "Software Engineer",
        org: "Dream11",
        status: "Interview",
        appliedDate: "17 Jul 2026",
    },
];

export const PillNames: string[] = ['all', 'applied', 'interview', 'offer', 'rejected']