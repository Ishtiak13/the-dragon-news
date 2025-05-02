import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const handleRegSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        updateUser({
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: url });
          })
          .catch((error) => {
            console.log(error);
            setUser(result.user)
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-full lg:max-w-1/3 shrink-0 lg:p-16 p-6">
          <h2 className="font-semibold text-4xl text-accent text-center">
            Register your account
          </h2>
          <hr className="border-black/20 mt-6" />
          <div className="card-body">
            <form onSubmit={handleRegSubmit} className="fieldset">
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Enter your name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                name="url"
                type="text"
                className="input w-full"
                placeholder="Enter your photo URL"
                required
              />
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

              <button type="submit" className="btn btn-primary mt-4">
                Register
              </button>
            </form>
            <p className="font-semibold text-accent text-center">
              Already Have An Account ? Please{" "}
              <Link to={"/auth/login"} className="text-red-500">
                Login
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
