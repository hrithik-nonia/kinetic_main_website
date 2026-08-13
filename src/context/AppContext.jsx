// built in imports
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

// custom imports
import categoryService from "../services/categoryService";
import otherServices from "../services/otherServices";

// eslint-disable-next-line
export const UserContext = createContext();

export function UserProvider({ children }) {
  // get filter categories ============
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAllCategories(),
    staleTime: 1000 * 60 * 10, // ✅ 10 min cache — baar baar fetch nahi hoga
  });

  const categories = data?.categories ?? [];

  // get sellers data
  const { data: sellersData, isLoading: isSellerLoading } = useQuery({
    queryKey: ["sellers"],
    queryFn: () => otherServices.getSellers(),
    staleTime: 1000 * 60 * 10,
  });

  const sellers = sellersData?.sellers ?? [];
  console.log(sellers);

  return (
    <UserContext.Provider
      value={{ categories, isLoading, sellers, isSellerLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}
