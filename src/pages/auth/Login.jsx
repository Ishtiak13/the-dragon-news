import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
const location = useLocation()
const navigate = useNavigate()
const [error, setError] = useState('')
  const { login } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(`${location.state? location.state: '/'}`)
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setError(errorCode)
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full lg:max-w-1/3 shrink-0 lg:p-16 p-6">
        <h2 className="font-semibold text-4xl text-accent text-center">
          Login your account
        </h2>
        <hr className="border-black/20 mt-6" />
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error&& <p className="text-red-500">{error}</p>}
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
          </form>
          <p className="font-semibold text-accent text-center">
            Don’t Have An Account ?{" "}
            <Link to={"/auth/register"} className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
