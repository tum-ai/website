import { useQuery } from "@tanstack/react-query";

export const useMembers = () => {
  const { status, data, error } = useQuery({
    queryKey: ["members"],
    queryFn: () => fetch("/api/members").then((res) => res.json()),
  });

  return {
    data,
    status,
    error,
  };
};
