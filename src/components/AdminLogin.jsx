import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
const AdminLogin = () => {
  const [message, setmessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/admin`,
        {
          username: data.username,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const auth = response.data;
      console.log(auth);
      if (auth.token) {
        localStorage.setItem("token", auth.token),
          setTimeout(() => {
            localStorage.removeItem("token");
            alert("Token has been removed. Please Login again");
            navigate("/");
          }, 3600000);
      }
      alert("login successfull");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setmessage("There is no email and password");
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-4 "
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
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
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-8 rounded focus:outline-none"
            >
              Admin Login
            </button>
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
