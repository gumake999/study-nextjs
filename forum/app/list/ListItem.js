'use client'

import Link from "next/link";

export default function ListItem({ items }) {
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
          <button onClick={(e) => {
            console.log('삭제 시도 ' + item._id);
            fetch(`http://localhost:3000/api/postDelete?id=${item._id}`, {
              method: 'DELETE',
            }).then((result) => {
              // 서버 코드에 따른 처리
              if(result.status === 200) {
                return result.json();
              } else {
                // 서버에서 에러 코드 전송 시 실행
                alert('게시글 삭제에 실패했습니다.');
              }
            }).then((result) => {
              // 성공 시 실행
              const currentList = e.target.parentElement;
              currentList.style.opacity = 0
              setTimeout(() => {
                  currentList.style.display = 'none'
                }
              , 500)
            }).catch((error) => {
              // 인터넷 연결 문제로 실패 시 실행
              console.log('삭제 실패', error)
            })
          }}>
            삭제
          </button>
        </div>
      ))}
    </div>
  )
}