interface ButtonProps {
    styles?: string
    trailIcon?: React.ElementType
    trailIconStyle?: string
    textStyles?: string
    btnName?: string
    leadIcon?: React.ElementType
    leadIconStyle?: string
}
const Button = ({ styles, trailIcon: TrailIcon, trailIconStyle, textStyles, btnName, leadIcon: LeadIcon, leadIconStyle }: ButtonProps) => {
    return (
        <div className={styles}>
            {TrailIcon && <TrailIcon className={trailIconStyle} size={20} />}
            {btnName && <p className={textStyles}>{btnName}</p>}
            {LeadIcon && <LeadIcon className={leadIconStyle} />}
        </div>
    )
}

export default Button