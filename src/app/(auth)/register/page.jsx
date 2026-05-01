"use client";

import Animation from "@/components/animations/Animation";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    
    const {name, email, password, photo} = data;

    const {data: res, error} = await authClient.signUp.email({
      name: name, 
    email: email, 
    password: password, 
    image: photo,
    callbackURL: "/",
    
    })

    console.log(res, error)
  };

  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center px-4 py-8">

      <div className="bg-white rounded-xl shadow-lg flex flex-col lg:flex-row items-center gap-6 p-6 sm:p-8 lg:p-12 w-full max-w-3xl">

        {/* Animation - mobile এ উপরে, lg এ বামে */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Animation />
        </div>

       

        {/* Register Form */}
        <div className="w-full lg:w-1/2">
          <div className="text-center">
            <h2 className="font-bold text-2xl text-green-800 mb-2">
              Register your account
            </h2>
          </div>

          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm">Name</legend>
              <input
                type="text"
                {...register("name", { required: "Name field is required" })}
                className="input w-full"
                placeholder="Enter your Name"
              />
              {errors.name && (
                <p className="text-red-500 font-medium">{errors.name.message}</p>
              )}
            </fieldset>

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
              <legend className="fieldset-legend text-sm">Photo URL (Link)</legend>
              <input
                type="text"
                {...register("photo", { required: "Photo URL field is required" })}
                className="input w-full"
                placeholder="Enter your Photo URL"
              />
              {errors.photo && (
                <p className="text-red-500 font-medium">{errors.photo.message}</p>
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
              Register
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;