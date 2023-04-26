import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function UserPage() {
  let session = await getServerSession(authOptions);

  if (session) {
    return (
      <div>
        <div>안녕하세요{session.user.name}님</div>
        <div></div>
      </div>
    );
  } else {
    return <div>로그인을 해주세요</div>;
  }
}
