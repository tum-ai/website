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

  const members = notionMembers
    .map((member: NotionMember) => ({
      name: member?.properties?.Name?.title?.at(0)?.plain_text,
      image: member?.icon?.file?.url,
      roles: member?.properties?.Role.multi_select
        .map((role) => role.name)
        .sort((a, b) => {
          if (a == "President" && b !== "President") {
            return -1;
          } else if (a == "Teamlead" && b !== "Teamlead") {
            return -1;
          } else {
            return 1;
          }
        }),
      departments: member?.properties?.[
        "Functional or Mission-Based Department"
      ].multi_select.map((department) => department.name),
      description: "",
      degree: member?.properties?.Degree?.select?.name,
    }))
    .sort((a, b) => {
      if (a.roles.includes("President") && !b.roles.includes("President")) {
        return -1;
      } else if (
        a.roles.includes("Teamlead") &&
        !b.roles.includes("Teamlead")
      ) {
        return -1;
      } else {
        return 1;
      }
    })
    .filter(isMember);

  res.status(200).json(members);
}
