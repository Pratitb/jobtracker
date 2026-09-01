'use client'

interface PillProps {
    getName?: string
    getActionFn?: () => void
    active?: boolean
}
const Pill = ({ getName, getActionFn, active }: PillProps) => {
    return (
        <div className={`rounded-lg border-2 px-3 py-1 ${active ? 'font-bold bg-icon border-black' : 'border-border'}`} onClick={getActionFn}>{getName}</div>
    )
}

export default Pill