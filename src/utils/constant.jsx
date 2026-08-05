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

// temp product data
export const Products = [
  {
    id: 1,
    brand: "TechGear Pro",
    name: "Quantum Watch X",
    price: 129,
    originalPrice: 215,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    brand: "AudioPure",
    name: "Sonic Wave Pro",
    price: 299,
    originalPrice: 399,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    brand: "LuxeKitchen",
    name: "Aura Brew Maker",
    price: 450,
    originalPrice: 530,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    brand: "EcoStride",
    name: "Vapor Flow V2",
    price: 85,
    originalPrice: 170,
    discount: 50,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    brand: "SoundCore",
    name: "Bass Pro X1",
    price: 199,
    originalPrice: 280,
    discount: 30,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    brand: "FitTech",
    name: "Band Ultra 5",
    price: 59,
    originalPrice: 99,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop",
  },
];

// temp verified seller
export const Sellers = [
  {
    id: 1,
    name: "TechGear Pro",
    category: "Premium Electronics",
    followers: "12k+",
    rating: "4.9/5",
    logo: "https://placehold.co/80x80/e0e7ff/4f46e5?text=TG&font=montserrat",
    logoBg: "bg-indigo-50",
  },
  {
    id: 2,
    name: "Luxe Living",
    category: "Lifestyle & Decor",
    followers: "45k+",
    rating: "4.8/5",
    logo: "https://placehold.co/80x80/fef9ee/d97706?text=LL&font=montserrat",
    logoBg: "bg-amber-50",
  },
  {
    id: 3,
    name: "BioGlow",
    category: "Organic Beauty",
    followers: "8k+",
    rating: "5.0/5",
    logo: "https://placehold.co/80x80/f0fdf4/16a34a?text=BG&font=montserrat",
    logoBg: "bg-green-50",
  },
  {
    id: 4,
    name: "NeoTrend",
    category: "Contemporary Fashion",
    followers: "22k+",
    rating: "4.7/5",
    logo: "https://placehold.co/80x80/fdf2f8/9333ea?text=NT&font=montserrat",
    logoBg: "bg-purple-50",
  },
];
