import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
const Register = () => {
  const [message, setmessage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { registerUser, signInWithGoogle } = useAuth();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      await registerUser(data.email, data.password);
      setmessage("");
      alert("The email is registered");
    } catch (error) {
      console.log(error);
      setmessage("Set a valid email");
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
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
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
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-8 rounded focus:outline-none">
              Register
            </button>
          </div>
        </form>
        <p className=" align-baseline font-medium mt-4 text-sm">
          Aldready got an account? Please{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            Login
          </Link>
        </p>
        <div className="mt-4">
          <button
            className="flex w-full flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 font-bold text-white py-2 px-4 rounded outline-none"
            onClick={handleGoogleSignin}
          >
            <FaGoogle className="mr-2" />
            Register With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
