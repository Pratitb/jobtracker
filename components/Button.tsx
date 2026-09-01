'use client'

interface ButtonProps {
    styles?: string
    getActionFn?: () => void
    trailIcon?: React.ElementType
    trailIconStyle?: string
    textStyles?: string
    getName?: string
    leadIcon?: React.ElementType
    leadIconStyle?: string
}
const Button = ({ styles, getActionFn, trailIcon: TrailIcon, trailIconStyle, textStyles, getName, leadIcon: LeadIcon, leadIconStyle }: ButtonProps) => {
    return (
        <div className={styles} onClick={getActionFn}>
            {TrailIcon && <TrailIcon className={trailIconStyle} size={20} />}
            {getName && <p className={textStyles}>{getName}</p>}
            {LeadIcon && <LeadIcon className={leadIconStyle} />}
        </div>
    )
}

export default Button