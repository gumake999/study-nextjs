import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, result){
  if (request.method !== 'DELETE')
    return result.status(400).json('올바른 요청 타입이 아닙니다.');

  const postId = request.query.id;

  if (!postId)
    return result.status(400).json('삭제 할 글 정보를 찾을 수 없습니다.');

  try {
    const db = (await connectDB).db('forum');
    await db.collection('post').deleteOne(
      { _id : new ObjectId(postId) },
    );

    result.status(200).json('삭제 완료')
  } catch (e) {
    console.log(`error: ${e}`);
    return result.status(500);
  }
}