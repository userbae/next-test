import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return <div>Apple forum에 온걸 환영합니다.</div>;
}
