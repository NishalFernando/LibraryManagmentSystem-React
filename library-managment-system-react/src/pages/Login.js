import React, {useState} from 'react';

const Login = ({onLogin}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({username, password})
    };

    return (


<section class="background-radial-gradient overflow-hidden">


<div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
  <div class="row gx-lg-5 align-items-center mb-5">
    <div class="col-lg-6 mb-5 mb-lg-0">
      <h3 class="text-center">Welcome to</h3>
      <h1 class=" display-5 fw-bold ls-tight text-center">
        Library <br />
        <span>Managment System</span>
      </h1>
      <p class="mb-4 opacity-70">
    
      </p>
    </div>

    <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
      <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
      <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

      <div class="card bg-glass border-5">
        <div class="card-body px-4 py-5 px-md-5">
          <form onSubmit={handleSubmit}>

         
            <div data-mdb-input-init class="form-outline mb-4">
             
              <label class="form-label" for="form3Example3">Username</label>
              <input type="text" id="form3Example3" class="form-control"  value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>

           
            <div data-mdb-input-init class="form-outline mb-4">
             
              <label class="form-label" for="form3Example4">Password</label>
              <input type="password" id="form3Example4" class="form-control"  value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

        
           

          
            <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  );
}

export default Login;