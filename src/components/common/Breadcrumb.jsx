// built in imports
import { ChevronRight } from "lucide-react";

// custom imports

const crumbs = [
  { label: "Home", href: "#" },
  { label: "Electronics", href: "#" },
  { label: "Premium Audio", href: null },
];

export default function Breadcrumb({ items = crumbs }) {
  return (
    <div className="flex justify-between flex-col gap-2 md:flex-row">
      {/* Breadcrumb trail */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRight size={14} className="text-gray-400 shrink-0" />
              )}

              {isLast ? (
                <span className="font-semibold text-gray-800">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                >
                  {crumb.label}
                </a>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
