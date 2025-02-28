export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form id="form" action="/api/postWrite" method="POST">
        <div>
          <h6>제목</h6>
          <input type='text' name={'title'} required />
        </div>

        <div>
          <h6>내용</h6>
          <textarea name={'content'} required />
        </div>

        <button type="submit">글 작성</button>
      </form>
    </div>
  )
}