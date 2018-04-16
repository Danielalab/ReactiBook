import React from 'react';

let email;
let password;

const SignUp = ({error, userSignUp}) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center height-100">
        <form className="col-10 col-md-5">
          <div className="row justify-content-center">
            <h2>Sign Up</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange= { (event) =>  email = event.target.value}/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => password = event.target.value}/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <small className="form-text text-danger my-3">{error}</small>                                                 
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-success" 
              onClick={(event)=> {
                event.preventDefault(); 
                userSignUp(email, password);
              }}
            >Sign Up</button>    
          </div>             
        </form>
      </div>
    </div>
  );
}

export default SignUp;