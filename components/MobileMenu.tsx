'use client'
import { Menu } from '@/utils/staticData'
import MobileMenuLink from './MobileMenuLink'
import { useState } from 'react'
import { MenuLinkType } from '@/utils/types'
import { useRouter } from 'next/navigation'

const MobileMenu = () => {
    const [activePage, setActivePage] = useState('dashboard')
    const router = useRouter()

    const handleMobMenuItem = (item: MenuLinkType) => {
        setActivePage(item.name ?? 'dashboard')
        router.push(item.href)
    }
    return (
        <div className='flex justify-center border-t border-t-border fixed w-full bottom-0 left-0 bg-white lg:hidden'>
            {Menu?.map((item: MenuLinkType) => <MobileMenuLink key={item.name} link={item.name} icon={item.icon} active={item.name === activePage} getActionFn={() => handleMobMenuItem(item)} />)}
        </div>
    )
}

export default MobileMenu