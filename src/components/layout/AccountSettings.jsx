import {
  ClipboardList,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  ShieldCheck,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    icon: ClipboardList,
    label: "My Orders",
    sub: "Track, return, or buy things again",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    showArrow: true,
  },
  {
    icon: Heart,
    label: "Wishlist",
    sub: "View and manage your saved items",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    showArrow: true,
  },
  {
    icon: MapPin,
    label: "Saved Addresses",
    sub: "Edit addresses for orders and gifts",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    showArrow: true,
  },
  {
    icon: CreditCard,
    label: "Payment Methods",
    sub: "Manage payment methods and balances",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    showArrow: true,
  },
  {
    icon: Bell,
    label: "Notifications",
    sub: "Manage your email and push preferences",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    showArrow: true,
  },
  {
    icon: ShieldCheck,
    label: "Security & Password",
    sub: "Update your password and secure your account",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    showArrow: true,
  },
  {
    icon: HelpCircle,
    label: "Help Center",
    sub: "Browse FAQs and contact support",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    showArrow: true,
  },
  {
    icon: LogOut,
    label: "Logout",
    sub: "Sign out of your account",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    labelColor: "text-red-500",
    showArrow: false,
  },
];

export default function AccountSettings() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5">
      <h2 className="text-base font-bold text-gray-900 mb-3">
        Account Settings
      </h2>

      <div className="flex flex-col divide-y divide-gray-100">
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={i}
              className="flex items-center gap-4 py-3.5 hover:bg-gray-50 transition-colors rounded-lg px-1 w-full text-left"
            >
              {/* Icon */}
              <div
                className={`w-9 h-9 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}
              >
                <Icon size={16} className={item.iconColor} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-semibold ${item.labelColor || "text-gray-800"}`}
                >
                  {item.label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </div>

              {/* Arrow */}
              {item.showArrow && (
                <ChevronRight size={16} className="text-gray-300 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
