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
    id?: string
    domain: string
    role?: string
    org?: string
    location?: string
    type?: string
    salary?: string
    status: string
    appliedDate?: string
}