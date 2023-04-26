import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    if (
      요청.body.name == "" ||
      요청.body.email == "" ||
      요청.body.password == ""
    ) {
      return 응답.status(500).json("빈칸을 채우세요");
    }
    let hash = await bcrypt.hash(요청.body.password, 10);
    요청.body.password = hash;
    요청.body.role = "";
    let db = (await connectDB).db("forum");

    let 중복 = await db
      .collection("user_cred")
      .findOne({ email: 요청.body.email });
    if (중복) {
      return 응답.status(500).json("중복된 이메일이 있습니다.");
    } else {
      await db.collection("user_cred").insertOne(요청.body);
      응답.send("<script>alert('success');location.href='/';</script>");
    }
  }
}
