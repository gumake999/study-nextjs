'use client'

import Link from "next/link";

export default function ListItem({ results }) {
  const items = JSON.parse(results);

  if(!Array.isArray(items))
    return;

  return(
    <div>
      {items.map((item, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${item._id }`}>
            <h4>{item.title}</h4>
          </Link>
          <Link href={`/edit/${item._id }`}>
            <span>수정</span>
          </Link>
          <button onClick={() => {
            console.log('삭제 시도 ' + item._id);
            fetch('/api/postDelete', {
              method: 'DELETE',
              body: JSON.stringify({ id: item._id.toString() }),
            }).then((result) => {
              console.log(result)
            }).catch(() => {
              console.log('삭제 실패')
            })
          }}>
            삭제
          </button>
        </div>
      ))}
    </div>
  )
}