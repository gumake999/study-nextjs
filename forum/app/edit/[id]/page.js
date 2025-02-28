import { ObjectId } from "mongodb";

import { connectDB } from "@/util/database";

export default async function Edit({ params: { id }}) {
  const postId = new ObjectId(id);
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').findOne({ _id: postId });

  console.log(result);

  return (
    <div>
      <h4>글수정</h4>
      <form id="form" action="/api/postUpdate" method="POST">
        <input type='hidden' name={'postId'} value={id} readOnly />

        <div>
          <h6>제목</h6>
          <input type='text' name={'title'} defaultValue={result.title} required />
        </div>

        <div>
          <h6>내용</h6>
          <textarea name={'content'} defaultValue={result.content} required />
        </div>

        <button type={'submit'}>글 작성</button>
      </form>
    </div>
  )
}