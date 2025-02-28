import { connectDB } from "@/util/database";

import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db('forum'); // collections 이름
  const results = await db.collection('post').find().toArray(); // document 출력

  console.log('results0', results)

  return (
    <div className="list-bg">
      <ListItem results={JSON.stringify(results)} />
      {/* results가 배열이므로 원래는 그냥 props로 넘길 수 있지만,
      _id가 ObjectId('..')로 되어서인지 정상적으로 넘어가지 않는다.
      ( _id: {buffer: ...} <- 이런 식으로 오류. )
      따라서 JSON.stringify()로 배열을 문자열화 해서 props로 넘긴 후 다시 배열화 시키는 방법 사용 */}
    </div>
  )
}