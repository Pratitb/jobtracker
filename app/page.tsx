import RecentApps from "@/components/Applications";
import StatCard from "@/components/StatCard";
import { getCount } from "@/lib/countStats";
import { applicationData } from "@/utils/staticData";

export default function Dashboard() {
  const applications = applicationData.length
  const recentFiveApplications = applicationData.slice(0, 5)
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4">
        <StatCard getName="applications" count={applications} />
        <StatCard getName="applied" count={getCount(applicationData, 'applied')} />
        <StatCard getName="interview" count={getCount(applicationData, 'interview')} />
        <StatCard getName="offer" count={getCount(applicationData, 'offer')} />
        <StatCard getName="rejected" count={getCount(applicationData, 'rejected')} />
      </div>
      <RecentApps getApplicationData={recentFiveApplications} head="recent applications" btn={'view all'} />
    </>
  );
}
