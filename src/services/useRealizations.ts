import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RealizationsResponse } from "@/model/Realization";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/realizations?populate=image`;

export const useRealizations = () => {
  return useQuery<RealizationsResponse>({
    queryKey: ["realizations"],
    queryFn: async () => {
      const { data } = await axios.get(API_URL);
      return data;
    },
  });
};
