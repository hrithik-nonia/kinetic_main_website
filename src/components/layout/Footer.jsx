import { Globe, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../utils/constant";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 font-sans">
      <div className="px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <span className="text-base font-bold text-gray-900 tracking-tight">
              Kinetic Marketplace
            </span>
            <p className="text-sm text-gray-500 leading-relaxed">
              The premium destination for future-focused shopping and
              <span className="text-blue-600">high-integrity</span> vendors.
              Redefining commerce for the next generation.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[Globe, Users, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
                  aria-label={["Website", "Community", "Email"][i]}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-gray-900">
                {section}
              </span>
              <ul className="flex flex-col gap-2">
                {links.map((linkItem) => (
                  <li key={linkItem.title}>
                    {linkItem.isExternal ? (
                      <a
                        href={linkItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center gap-1"
                      >
                        {linkItem.title} ↗
                      </a>
                    ) : (
                      <Link
                        to={linkItem.link}
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        {linkItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © 2024 <span className="text-blue-600">Kinetic Marketplace</span>.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Global Marketplace</span>
            <span className="text-gray-300">|</span>
            <span>US Edition (EN)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
