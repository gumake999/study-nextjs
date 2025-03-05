import { connectDB } from "@/util/database";

export default async function handler(request, result) {
  if (request.method !== 'GET')
    return result.status(405).json({ message: "올바른 요청 타입이 아닙니다." });

  try {
    const db = (await connectDB).db('forum');
    const posts = await db.collection('post').find({}).toArray();

    return result.status(200).json({ success: true, posts });
  } catch (e) {
    console.log(`error: ${e}`);
    return result.status(500).json({ message: '연결 오류'});
  }
}
