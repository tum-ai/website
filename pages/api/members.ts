import { NotionDB } from "notiondb";

export default async function handler(req, res) {
  const integrationKey = process.env.NOTION_INTEGRATION_KEY;
  const notionDB = new NotionDB(integrationKey);

  const databases = await notionDB.databases.getAll();
  console.log(databases.map((d) => d.object));

  res.status(200).json({ name: "John Doe" });
}
