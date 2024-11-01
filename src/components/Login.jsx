import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
const Login = () => {
  const [message, setmessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { loginUser, signInWithGoogle } = useAuth();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await loginUser(data.email, data.password);
      alert("User LOgged In");
      navigate("/");
    } catch (err) {
      console.log(err);
      setmessage("There is no email and password");
    }
  };
  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      alert("Google sign in failed");
      console.log(error);
    }
  };
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-4 "
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
            />
          </div>
          <div className="mb-4 gap-4">
            <label
              className="text-gray-700 text-sm font-bold mb-4 mt-4"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
            />
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-8 rounded focus:outline-none">
              Login
            </button>
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
        </form>
        <p className=" align-baseline font-medium mt-4 text-sm">
          Havent got an account? Please{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            Register
          </Link>
        </p>
        <div className="mt-4">
          <button
            className="flex w-full flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 font-bold text-white py-2 px-4 rounded outline-none"
            onClick={handleGoogleSignin}
          >
            <FaGoogle className="mr-2" />
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
