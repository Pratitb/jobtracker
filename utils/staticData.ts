import { CalendarDays, FileStack, HandPlatter, HeartX, Home, MessageSquareReply, MessagesSquare, UserShield } from "lucide-react";
import { MenuLinkType } from "./types";

export const Menu: MenuLinkType[] = [
    { name: 'dashboard', icon: Home, href: '/' },
    { name: 'apps', icon: FileStack, href: '/apps' },
    { name: 'calendar', icon: CalendarDays, href: '/calendar' },
    { name: 'profile', icon: UserShield, href: '/profile' }
]

export const StatCards = [
    { name: 'applications', icon: FileStack },
    { name: 'responses', icon: MessageSquareReply },
    { name: 'interviews', icon: MessagesSquare },
    { name: 'offers', icon: HandPlatter },
    { name: 'rejected', icon: HeartX }
]