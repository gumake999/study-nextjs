import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, result){
  if (request.method !== 'POST')
    return result.status(400).json('올바른 요청 타입이 아닙니다.');

  const post = request.body;

  if (post.title === '' || post.content === '')
    return result.status(400).json('필수 입력란에 내용이 없습니다.');

  try {
    const db = (await connectDB).db('forum');
    await db.collection('post').updateOne(
      { _id : new ObjectId(post.postId) },
      { $set: { title: post.title, content: post.content } },
    );

    result.redirect(302, `/detail/${post.postId}`);
  } catch (e) {
    console.log(`error: ${e}`);
    return result.status(500);
  }
}