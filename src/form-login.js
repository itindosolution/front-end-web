function FormLogin(){
    return (
        <div className="">
        <div className="mb-3">
  <label forLabel="exampleFormControlInput1" className="form-label">Username</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label forLabel="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        </div>
    )           
}

export default FormLogin;