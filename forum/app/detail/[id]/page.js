import { ObjectId } from "mongodb";

import { connectDB } from "@/util/database";

export default async function Detail({ params: { id }}) {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').findOne({ _id: new ObjectId(id) });

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}