interface StatCardProps {
    icon?: React.ElementType
    getName?: string
    count?: number
}
const StatCard = ({ icon: Icon, getName, count }: StatCardProps) => {
    return (
        <div className="bg-white rounded-lg px-3 py-2 border border-border flex-1">
            {Icon && <Icon size={20} />}
            <div>
                <p className="font-bold text-xl">{count}</p>
                <p className="capitalize text-sm">{getName}</p>
            </div>
        </div>
    )
}

export default StatCard