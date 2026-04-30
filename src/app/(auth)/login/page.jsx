"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const handleLogin = (data) => {
    console.log(data)
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center ">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="font-bold text-2xl text-green-800 mb-2">
            Welcome Back!
          </h2>
          <p className="text-sm text-slate-400 font-medium mb-2">
            Login to continue to your account
          </p>
        </div>

        <form className="" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Email</legend>
            <input
              type="email"
             {...register("email" , {required: "Email field is required"})}
              className="input"
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-red-500 font-medium">{errors.email.message}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Password</legend>
            <input
              type="password"
              {...register("password" , {required: "Password field is required"})}
              className="input"
              placeholder="Enter your password"
            />
            {errors.password && <p className="mt-1 text-red-500 font-medium">{errors.password.message}</p>}
          </fieldset>
          <button className=" btn bg-green-800 text-white w-full">Login</button>
        </form>

        <div className="mt-4">
          <p className="text-sm font-medium">
            Don't have an account?{" "}
            <Link className="text-green-800" href={"/register"}>
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
