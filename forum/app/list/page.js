import ListItem from "./ListItem";

export default async function List() {
  // 요청 url 별 캐싱
  const res = await fetch("http://localhost:3000/api/postGet", { method: 'GET', next: { revalidate: 10 }});
  const { posts } = await res.json();

  return (
    <div className="list-bg">
      <ListItem results={posts} />
    </div>
  )
}