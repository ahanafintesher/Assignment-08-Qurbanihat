"use client";

import Animation from "@/components/animations/Animation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async(data) => {
    const {email, password} = data;
    const {data:res, error} = await authClient.signIn.email({
         
        email: email, 
        password: password, 
       callbackURL: "/",
  })
 
};

  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center px-4 py-8">

      <div className="bg-white rounded-xl shadow-lg flex flex-col lg:flex-row items-center gap-6 p-6 sm:p-8 lg:p-12 w-full max-w-3xl">

        {/* Animation - mobile এ উপরে, lg এ বামে */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Animation />
        </div>

      

        {/* Login Form */}
        <div className="w-full lg:w-1/2">
          <div className="text-center">
            <h2 className="font-bold text-2xl text-green-800 mb-2">
              Welcome Back!
            </h2>
            <p className="text-sm text-slate-400 font-medium mb-2">
              Login to continue to your account
            </p>
          </div>

          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">Email</legend>
              <input
                type="email"
                {...register("email", { required: "Email field is required" })}
                className="input w-full"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 font-medium">{errors.email.message}</p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">Password</legend>
              <input
                type="password"
                {...register("password", { required: "Password field is required" })}
                className="input w-full"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-red-500 font-medium">
                  {errors.password.message}
                </p>
              )}
            </fieldset>

            <button className="btn bg-green-800 text-white w-full mt-2">
              Login
            </button>
          </form>

          <div className="mt-4">
            <p className="text-sm font-medium">
              Don't have an account?{" "}
              <Link className="text-green-800 hover:underline" href="/register">
                Register
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;