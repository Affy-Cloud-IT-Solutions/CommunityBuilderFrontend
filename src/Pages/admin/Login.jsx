import React from 'react'
import { useState } from 'react';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div>
  
      <div className="container-fluid main">
        <div className="login-box text-center">
          <h2 className="text-center">Login</h2>
          <form>
            <div className="form-group mt-4">
              <input type="text" className='w-100 py-1 px-3 form-control no-outline' placeholder='Name' />
              <i className="bi bi-envelope-fill icon"></i>
            </div>
            <div className="form-group mt-4">
              <input       type={showPassword ? "text" : "password"} className='w-100 py-1 px-3 form-control no-outline' placeholder='Password ' />
              <i
                            className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} icon`}
                            onClick={togglePasswordVisibility}
                            style={{ cursor: 'pointer' }}
                        ></i>

            </div>
            {/* <div className='remember-forget mt-4'><label htmlFor=""><input type="checkbox" />Remember me</label>
                        <Link to="/" className="forget text-decoration-none">Forget password</Link>
                    </div> */}
            <button type="submit" className="btn btn-primary btn-block mt-4">
              Submit
            </button>
            {/* <div className='register-link mt-3'>
                        <p>Don't have an account?
                            <Link to="/" className="forget text-decoration-none mx-2">Register</Link>
                        </p>

                    </div> */}
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login




  