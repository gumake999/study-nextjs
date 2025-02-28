/**
 * 서버 기능
 * POST 요청하면 파일 안의 코드를 실행시켜줌.
 * 따로 뭘 하지 않아도 Next.js는 그냥 해준다!
 * */

import { connectDB } from "@/util/database";

export default async function handler(request, result){
  if (request.method !== 'POST')
    return result.status(400).json('올바른 요청 타입이 아닙니다.');

  const contents = request.body;

  if (contents.title === '' || contents.content === '')
    return result.status(400).json('필수 입력란에 내용이 없습니다.');

  try {
    const db = (await connectDB).db('forum');
    const results = await db.collection('post').insertOne(request.body);

    result.redirect(302, '/list');
  } catch (e) {
    console.log(`error: ${e}`);
    return result.status(500);
  }

  /**
   * !! 따로 응답을 주지 않으면 무한 로딩에 걸린다.
   * status code는 검색해서 자세히 더 표기할 수 있음.
   * */
}