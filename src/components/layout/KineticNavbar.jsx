// built in imports
import { Menu, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

// custom imports
import { NavbarLinks, NavbarButtons } from "../../utils/constant.jsx";

export default function KineticNavbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Left: Logo + Links */}
      <div className="flex items-center gap-8">
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          Kinetic Marketplace
        </NavLink>

        <div className=" items-center gap-6 text-sm font-medium text-gray-700 hidden md:flex">
          {NavbarLinks.map((link) => (
            <NavLink
              key={link.link}
              to={link.link}
              className={({ isActive }) =>
                `${isActive ? "text-blue-600 font-bold" : "text-gray-600"} px-2 hover:text-blue-600`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Right: Search + Icons */}
      <div className="flex items-center gap-5">
        <div className="relative hidden lg:block">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-9 pr-4 py-2 w-64 rounded-md bg-gray-100 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex gap-3 md:gap-8">
          {NavbarButtons.map(({ link, icon: Icon }) => (
            <NavLink
              key={link}
              to={link}
              className="text-gray-600 hover:text-blue-600"
            >
              <Icon className="w-5 h-5" />
            </NavLink>
          ))}

          <button
            aria-label="burger-menu"
            className=" hover:bg-blue-700 md:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
