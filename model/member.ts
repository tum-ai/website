export type Role = {
  name: string;
  color: string;
};

export const isRole = (data: unknown): data is Role => {
  const role = data as Role;
  return typeof role.name === "string" && typeof role.color === "string";
};

export type Member = {
  image: string;
  description: string;
  name: string;
  roles: Role[];
};

export const isMember = (data: unknown): data is Member => {
  const member = data as Member;
  return (
    typeof member.image === "string" &&
    typeof member.description === "string" &&
    typeof member.name === "string"
  );
};
