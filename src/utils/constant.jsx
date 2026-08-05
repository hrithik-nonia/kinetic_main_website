// built in imports
import { Heart, ShoppingCart, User } from "lucide-react";

// custom imports

// navbar links
export const NavbarLinks = [
  { name: "Categories", link: "/filter" },
  { name: "Deals", link: "/deals" },
  { name: "Sellers", link: "/sellers" },
  { name: "New Arrivals", link: "/new-arrivals" },
];

// navbar navigation buttons
export const NavbarButtons = [
  { link: "/wishlist", icon: Heart },
  { link: "/cart", icon: ShoppingCart },
  { link: "/account", icon: User },
];
