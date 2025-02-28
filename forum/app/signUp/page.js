export default async function SignUp() {
  return (
    <form id="form" action="/api/signUp" method="POST">
      <div>
        <label>ID</label>
        <input type={'text'} name={'userId'} required/>
      </div>
      <div>
        <label>PASSWORD</label>
        <input type={'password'} name={'userPassword'} required/>
      </div>
      <div>
        <button type={'submit'}>Sign-Up</button>
      </div>
    </form>
  )
}