import { LucideIcon } from "lucide-react"
import React from "react"

export interface MenuLinkType {
    name?: string
    icon: React.ElementType
    href: string
}

export interface StatCardType {
    name?: string
    icon?: LucideIcon
}

export interface ApplicationType {
    domain: string
    role?: string
    org?: string
    status: string
    appliedDate?: string
}