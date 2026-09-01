import RecentApps from "@/components/RecentApps";
import StatCard from "@/components/StatCard";
import { StatCards } from "@/utils/staticData";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4">
        {StatCards.map(item => <StatCard key={item.name} getName={item.name} />)}
      </div>
      <RecentApps />
    </>
  );
}
