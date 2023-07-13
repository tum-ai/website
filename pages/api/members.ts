import { Client } from "@notionhq/client";
import { NotionMember } from "model/notionMember";

export const isMember = (data: unknown): boolean => {
  const member: any = data;
  return (
    typeof member.image === "string" &&
    typeof member.description === "string" &&
    typeof member.name === "string" &&
    member.roles.every(
      (role: any) =>
        typeof role === "string" &&
        ![
          "Inactive",
          "Unclear",
          "Pause",
          "Alumni",
          "Advisor",
          "Board",
          "kicked",
        ].includes(role)
    ) &&
    member.roles.length > 0 &&
    member.departments.every(
      (department: any) => typeof department === "string"
    )
  );
};

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const data = await notion.databases.query({
    database_id: process.env.NOTION_MEMBERS_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Name",
          title: {
            is_not_empty: true,
          },
        },
        {
          or: [
            {
              property: "Role",
              multi_select: {
                contains: "President",
              },
            },
            {
              property: "Role",
              multi_select: {
                contains: "Teamlead",
              },
            },
          ],
        },
      ],
    },
  });

  const notionMembers = data.results as NotionMember[];

  const roleOrder = {
    President: 0,
    Teamlead: 1,
    Member: 2,
  };

  const members = notionMembers
    .map((member: NotionMember) => ({
      name: member?.properties?.Name?.title?.at(0)?.plain_text,
      image: member?.icon?.file?.url,
      roles: member?.properties?.Role.multi_select
        .map((role) => role.name)
        .sort((a, b) => roleOrder[a] - roleOrder[b]),
      departments: member?.properties?.[
        "Functional or Mission-Based Department"
      ].multi_select.map((department) => department.name),
      description: "",
      degree: member?.properties?.Degree?.select?.name,
    }))
    .filter(isMember)
    .sort((a, b) => {
      const mostImportantRoleA = Math.min(
        ...a.roles.map((role) => roleOrder[role])
      );
      const mostImportantRoleB = Math.min(
        ...b.roles.map((role) => roleOrder[role])
      );
      return mostImportantRoleA - mostImportantRoleB;
    });

  res.status(200).json(members);
}
