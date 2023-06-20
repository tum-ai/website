import { useQuery } from "@tanstack/react-query";
import { Member } from "model/member";

export const useMembers = () => {
  const { status, data, error } = useQuery<Member[]>({
    queryKey: ["members"],
    queryFn: () => fetch("/api/members").then((res) => res.json()),
  });

  return {
    data,
    status,
    error,
  };
};
