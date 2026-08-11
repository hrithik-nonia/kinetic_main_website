// built in imports
import { useQuery } from "@tanstack/react-query";

// custom imports
import ProfileHeader from "../components/layout/ProfileHeader";
import UserStatsBar from "../components/layout/UserStatsBar";
import AccountSettings from "../components/layout/AccountSettings";
import RecentOrders from "../components/layout/RecentOrders";
import authService from "../services/authService";

export default function Profile() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: () => authService.getMe(),
  });

  const { data: dashboard, isLoading: dashboardLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => authService.getDashboard(),
  });

  if (isLoading || dashboardLoading) return <div>Loading...</div>;

  return (
    <>
      <section className="bg-slate-50 p-6 space-y-7">
        {/* profile name */}
        <div>
          <ProfileHeader user={user} />
        </div>

        {/* main content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {/* setting options */}
          <div className="lg:col-span-3 space-y-5">
            {/* info badge */}
            <div>
              <UserStatsBar statsData={dashboard.stats} />
            </div>

            {/* setting options */}
            <div>
              <AccountSettings />
            </div>
          </div>

          {/* setting data */}
          <div className="lg:col-span-1">
            <RecentOrders recentOrder={dashboard.recent_orders} />
          </div>
        </div>
      </section>
    </>
  );
}
