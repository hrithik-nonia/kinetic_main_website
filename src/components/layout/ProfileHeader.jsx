import { BadgeCheck } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 flex items-center justify-between">
      {/* Left: Name + meta */}
      <div>
        <div className="flex items-center gap-1.5">
          <h2 className="text-lg font-bold text-gray-900">Alex Johnson</h2>
          <BadgeCheck
            size={18}
            className="text-blue-500 fill-blue-500"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex items-center gap-2 mt-0.5 text-sm text-gray-400">
          <span className="text-blue-500">alex.j@example.com</span>
          <span>•</span>
          <span>Member since Oct 2023</span>
        </div>
      </div>

      {/* Right: Edit button */}
      <button className="px-4 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-blue-600 hover:bg-gray-50 transition-colors">
        Edit Profile
      </button>
    </div>
  );
}
