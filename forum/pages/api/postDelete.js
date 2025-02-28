import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, result){
  console.log('request.method', request.method);

  if (request.method !== 'DELETE')
    return result.status(400).json('올바른 요청 타입이 아닙니다.');

  console.log('request.body', request.body);
  const postId = JSON.parse(request.body).id;
  console.log('삭제할 id : ' + postId);

  if (!postId)
    return result.status(400).json('삭제 할 글 정보를 찾을 수 없습니다.');

  try {
    const db = (await connectDB).db('forum');
    await db.collection('post').deleteOne(
      { _id : new ObjectId(postId) },
    );

    result.status(200)
  } catch (e) {
    console.log(`error: ${e}`);
    return result.status(500);
  }
}