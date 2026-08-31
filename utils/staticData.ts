import { CalendarDays, FileStack, Home, UserShield } from "lucide-react";
import { MenuLinkType } from "./types";

export const Menu: MenuLinkType[] = [
    { name: 'home', icon: Home, href: '/' },
    { name: 'apps', icon: FileStack, href: '/apps' },
    { name: 'calendar', icon: CalendarDays, href: '/calendar' },
    { name: 'profile', icon: UserShield, href: '/profile' }
]