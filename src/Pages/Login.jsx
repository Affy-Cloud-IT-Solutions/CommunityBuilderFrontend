import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchWeb } from "../utils/utils";
// import { LOGIN_URL } from '../api';
// import logo from "../img/affy_logo.png"
// import { Dashnavbar } from '../Componants/Dashnavbar';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await fetchWeb(`/user/login`, "post", {
        email,
        password,
      });
      console.log(response);
      setIsLoading(false);

      if (response.data.error) {
        setIsLoading(false);
        setError(response.data.error);
        return;
      } else {
        toast.success(response.data.message);
        localStorage.setItem("csf_token", response.data.meta.token);
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.meta.user)
        );
        navigate("/Community_dash");
        setIsLoading(true);
      }
    } catch (err) {
      console.log("catch", err);
      setIsLoading(false);
      const errorMessage =
        err.response?.data?.message ||
        "Something Went Wrong. Please Try Again Later.";
      toast.error(errorMessage);
    }
  };

  // if (isLoggedIn) {
  //   return <Navigate to="/Community_dash" />;
  // }

  return (
    <section className="bg-light  bg-primary py-md-5">
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="text-center mb-3">
                  <a href="#">
                    <img
                      // src={logo}
                      alt="BootstrapBrain Logo"
                      width="125"
                      height="95"
                    />
                  </a>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="khalid6m"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label htmlFor="email" className="form-label">
                          User Email
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex gap-2 justify-content-between">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            name="rememberMe"
                            id="rememberMe"
                            defaultChecked
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                        <Link
                          to="/resetpassword"
                          className="link-primary text-decoration-none"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? "Logging in..." : "Log in"}
                        </button>
                      </div>
                    </div>
                    {error && (
                      <div className="col-12">
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
