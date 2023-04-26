import { connectDB } from "@/util/database";

export default async function List(요청, 응답) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return 응답.status(200).json(result);
}
