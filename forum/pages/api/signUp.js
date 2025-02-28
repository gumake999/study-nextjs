import { connectDB } from "@/util/database";

export default async function handler(request, result){
  if (request.method !== 'POST')
    return result.status(400).json('올바른 요청 타입이 아닙니다.');

  const contents = request.body;

  if (contents.id === '' || contents.password === '')
    return result.status(400).json('필수 입력란에 내용이 없습니다.');

  try {
    const db = (await connectDB).db('forum');

    const user = await db.collection('signUp').find({ userId: contents.userId }).toArray();

    if (user.length > 0)
      return result.status(400).json('중복 ID 입니다.');

    try {
      const results = await db.collection('signUp').insertOne(request.body);
      result.redirect(302, '/');
    } catch (e) {
      console.log(`error: ${e}`);
      return result.status(500);
    }
  } catch (e) {
    console.log(`error: ${e}`);
    return result.status(500);
  }





}