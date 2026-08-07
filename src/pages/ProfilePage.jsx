// built in imports

// custom imports
import ProfileHeader from "../components/layout/ProfileHeader";
import RecentOrders from "../components/layout/RecentOrders";
import UserStatsBar from "../components/layout/UserStatsBar";
import AccountSettings from "../components/layout/AccountSettings";

function ProfilePage() {
  return (
    <>
      <section className="bg-slate-50 p-6 space-y-7">
        {/* profile name */}
        <div>
          <ProfileHeader />
        </div>

        {/* main content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {/* setting options */}
          <div className="lg:col-span-3 space-y-5">
            {/* info badge */}
            <div>
              <UserStatsBar />
            </div>

            {/* setting options */}
            <div>
              <AccountSettings />
            </div>
          </div>

          {/* setting data */}
          <div className="lg:col-span-1">
            <RecentOrders />
          </div>
        </div>
      </section>
    </>
  );
}
export default ProfilePage;
