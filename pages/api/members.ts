import { Client } from "@notionhq/client";
import { Member, isMember } from "model/member";
import { NotionMember } from "model/notionMember";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const data = await notion.databases.query({
    database_id: "6aba41de28f74ee881b698e959ce6ed3",
  });

  const notionMembers = data.results.map(
    (user: any) => user?.properties as NotionMember
  );

  const members: Member[] = notionMembers
    .map((member) => ({
      name: member?.name?.title?.at(0)?.plain_text,
      image: "",
      roles: member.Role.multi_select.map((role) => ({
        name: role.name,
        color: role.color,
      })),
      description: "",
    }))
    .filter((member) => isMember(member));

  res.status(200).json(members);
}
