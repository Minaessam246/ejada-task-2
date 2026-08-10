import React from 'react'

export default function Landing() {
  return (
    <>

        <div className="d-flex justify-content-between hambozo   w-100 flex-column flex-md-row">

     <div className="d-flex justify-content-between  left  order-2 order-md-1   mx-auto flex-column align-items-center "  style={{ 
              
              width: "23%" 
            
            }}>
           <div
            className="mt-md-5 pt-md-5"
           
          >

            <h2 className="my-4 welcome">
              Welcome Back <span className="fw-normal welcome-icon">👋</span>
            </h2>

            <p
              className="text-dark my-4"
              style={{
                fontFamily: "SF Pro Display",
                fontSize: 20,
                lineHeight: "160%"
              }}
            >
              Today is a new day. It's your day. You shape it.
              Sign in to start managing your projects.
            </p>

            <form>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fs-6"
                >
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Example@email.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label fs-6"
                >
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="At least 8 characters"
                />
              </div>

              <div className="w-100 d-flex justify-content-end align-items-center my-1">
                <a
                  className="text-decoration-none text-left font-16"
                  href=""
                >
                  Forget Password?
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-dark my-3 w-100 font-16 fw-light p-2 "
              >
                Sign in
              </button>

            </form>

            <div className="or my-3 d-flex justify-content-between align-items-center">

              <div className="line"></div>

              <p className="my-1">Or <span className='d-md-none d-inline'>sign in with</span></p>

              <div className="line"></div>

            </div>

            <div className="d-flex flex-md-column justify-content-between align-items-center">

              <button
                type="button"
                className="btn back w-100 m-1  fw-light"
              >
                <img
                  src="../../goo.webp"
                  className="google bg-transparent  "
                  alt=""
                />
            <span >  <span className='d-none d-md-inline '>  Sign in with</span> Google</span>
              </button>

              <button
                type="button"
                className="btn back w-100 m-1 fw-light"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-facebook m-1"></i>
                     <span >  <span className='d-none d-md-inline'>  Sign in with</span> Facebook</span>
                </div>
              </button>

          

            </div>
                <div className="w-100  my-5 text-center   ">
                Don't you have an account?{" "}
                <a
                  className="text-decoration-none font-16"
                  href=""
                >
                  Sign up
                </a>
              </div>
              

          </div>
          <div className=" text-center " style={{color:" #959CB6", fontFamily:"Roboto"}}>
  © 2023 ALL RIGHTS RESERVED
</div>
     </div>

          <div className="right order-1 order-md-2">
            <img
              src="../../992dfb2830a38887b0559dfb619dc9eba940a887.jpg"
              className="landing-img w-100 object-fit-cover"
              alt=""
            />
          </div>

        </div>
 
    </>
  )
}