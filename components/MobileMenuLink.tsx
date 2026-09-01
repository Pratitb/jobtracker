'use client'

interface MobileMenuLinkProps {
    icon?: React.ElementType
    link?: string
    getActionFn?: () => void
    active?: boolean
}
const MobileMenuLink = ({ icon: Icon, link, getActionFn, active }: MobileMenuLinkProps) => {
    return (
        <div className={`flex flex-col items-center px-2 py-2 ${active ? 'font-semibold bg-active' : ''}`} onClick={getActionFn}>
            {Icon && <Icon size={18} />}
            {link && <p className="capitalize text-sm">{link}</p>}
        </div>
    )
}

export default MobileMenuLink