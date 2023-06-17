import { useQuery } from "@tanstack/react-query";

export const useMembers = () => {
  const { status, data, error } = useQuery({
    queryKey: ["members"],
    queryFn: () => fetch("/api/members"),
  });

  return {
    members: data,
    status,
    error,
  };
};
