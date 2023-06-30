import { Client } from "@notionhq/client";
import { NotionMember } from "model/notionMember";

export const isMember = (data: unknown): boolean => {
  const member: any = data;
  return (
    typeof member.image === "string" &&
    typeof member.description === "string" &&
    typeof member.name === "string" &&
    member.roles.every((role: any) => typeof role === "string") &&
    member.departments.every(
      (department: any) => typeof department === "string"
    )
  );
};

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const data = await notion.databases.query({
    database_id: "8590ada99c13454691e5ed6329697b09",
  });

  const notionMembers = data.results as NotionMember[];

  const members = notionMembers
    .map((member: NotionMember) => ({
      name: member?.properties?.Name?.title?.at(0)?.plain_text,
      image: member?.icon?.file?.url,
      roles: member?.properties?.Role.multi_select.map((role) => role.name),
      departments: member?.properties?.[
        "Functional or Mission-Based Department"
      ].multi_select.map((department) => department.name),
      description: "",
    }))
    .filter(isMember);

  res.status(200).json(members);
}
