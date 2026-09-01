import StatCard from "@/components/StatCard";
import { StatCards } from "@/utils/staticData";

export default function Dashboard() {
  return (
    <div className="flex flex-wrap gap-2">
      {StatCards.map(item => <StatCard key={item.name} getName={item.name} />)}
    </div>
  );
}
