import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AuroraText } from "../components/magicui/aurora-text";
import { styled } from "styled-components";
import axios from "axios";

const Registration = () => {
  const [state, setState] = useState("sign up");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password: pass,
          industry,
        }
      );

      console.log(response.data);
      toast.success("registered successfully");
      localStorage.setItem("userEmail", email);
      navigate("/");
    } catch (error) {
      console.error(error.response?.data?.message || "Registration failed");
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="border-t-[1px] bg-[#aebdd835] h-screen font-inter">
      {/* <ToastContainer /> */}
      <div className="header-top flex items-center gap-2 px-10 mt-6">
        <img src={assets.logo} alt="" className="w-10" />
        <p className="text-[26px] font-semibold text-black tracking-tight">
          Trackify
        </p>
      </div>
      <div className="flex items-center justify-center mt-8 ">
        <div className="border border-gray-100 shadow-xl w-[420px] p-8 rounded-md bg-white">
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <img src={assets.logo} alt="" className="w-10 -mt-3" />
            </div>
            <div>
              {state === "sign up" ? (
                <p className="tracking-wider text-[14px]">
                  Have an account?
                  <button
                    href="#"
                    className="font-semibold text-blue-600 hover:underline ml-1"
                    onClick={() => setState("login")}
                  >
                    Log in
                  </button>
                </p>
              ) : (
                <p className="tracking-tight text-[14px]">
                  New to Zipserve?
                  <button
                    href="#"
                    className="font-semibold text-blue-600 hover:underline ml-1"
                    onClick={() => setState("sign up")}
                  >
                    Create Account
                  </button>
                </p>
              )}
            </div>
          </div>

          <div className="mt-10">
            {state === "sign up" ? (
              <h1 className="text-[27px] font-semibold leading-9">
                <AuroraText>Register</AuroraText> & Manage Your Supply
              </h1>
            ) : (
              <h1 className="text-[27px] font-semibold">
                <AuroraText>Welcome</AuroraText> Back!
              </h1>
            )}
          </div>
          <p className="text-[16px] mt-4">
            Trackify, Where Business meets{" "}
            <span className="text-[#3b75ef] text-[18px] italic font-medium">
              AI
            </span>
          </p>
          <form onSubmit={onSubmitHandler}>
            {" "}
            <div className="mt-6">
              <StyledWrapper>
                {state === "sign up" && (
                  <div className="input-group mb-4">
                    <input
                      required
                      type="text"
                      name="username"
                      autoComplete="off"
                      className="input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label className="user-label">Username</label>
                  </div>
                )}

                <div className="input-group mb-4">
                  <input
                    required
                    type="text"
                    name="email"
                    autoComplete="on"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="user-label">Email</label>
                </div>

                <div className="input-group">
                  <input
                    required
                    type="password"
                    name="password"
                    autoComplete="off"
                    className="input"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <label className="user-label">Password</label>
                </div>

                {state === "sign up" && (
                  <div className="input-group">
                    <select
                      required
                      className="input"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Organisation
                      </option>

                      <option value="retailer">Retailer</option>
                      <option value="electronic shop">Organisation</option>
                      <option value="wholesale">Wholesaler</option>
                    </select>
                    {/* <label className="user-label">Select Industry</label> */}
                  </div>
                )}
              </StyledWrapper>
            </div>
            <div className="mt-4 flex items-center">
              <StyledWrapper>
                <label className="container">
                  <input type="checkbox" />
                  <svg viewBox="0 0 64 64" height="1em" width="1em">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      className="path"
                    />
                  </svg>
                </label>
              </StyledWrapper>
              {
                <label className="ml-2 text-sm text-gray-600" htmlFor="terms">
                  I agree to the
                  <a className="text-blue-600 hover:underline" href="#">
                    Terms and Conditions
                  </a>
                </label>
              }
            </div>
            {state === "sign up" ? (
              <button
                type="submit"
                className="bg-blue-600 text-white text-sm h-10 w-[130px] rounded-md font-semibold mt-5 shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105"
              >
                Get Started
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 text-white text-sm h-10 w-[130px] rounded-md font-semibold mt-5 shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105"
              >
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .input-group {
    position: relative;
    margin-bottom: 1rem;
  }

  .input {
    width: 100%;
    border: solid 1.5px #9e9e9e;
    border-radius: 1rem;
    background: white;
    padding: 0.8rem;
    font-size: 1rem;
    color: #1a1a1a;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .user-label {
    position: absolute;
    left: 15px;
    color: #666;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus,
  input:valid {
    outline: none;
    border: 1.5px solid #3b75ef;
  }

  .input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: white;
    padding: 0 0.2em;
    color: #3b75ef;
  }
  .container {
    cursor: pointer;
  }

  .container input {
    display: none;
  }

  .container svg {
    overflow: visible;
  }
  .path {
    fill: none;
    stroke: #1a73e8;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke-dasharray 0.5s ease;
    stroke-dasharray: 0 0 240 99999;
    stroke-dashoffset: 1;
    scale: -1 1;
    transform-origin: center;
    animation: hi 0.5s;
  }

  .container input:checked ~ svg .path {
    stroke-dasharray: 0 262 70 9999999;
    transition-delay: 0s;
    scale: 1 1;
    animation: none;
  }
  @keyframes hi {
    0% {
      stroke-dashoffset: 20;
    }
    to {
      stroke-dashoffset: 1;
    }
  }
`;

export default Registration;

// export default Registration;
