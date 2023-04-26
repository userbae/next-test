import { connectDB } from "@/util/database";
import ListItem from "./ListItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const dynamic = "force-dynamic";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  let session = await getServerSession(authOptions);

  return (
    <div>
      <ListItem result={result} session={session} />
    </div>
  );
}
