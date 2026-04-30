"use client";

import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center ">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="font-bold text-2xl text-green-800 mb-2">
            Register your account
          </h2>
        </div>

        <form className="" onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Name</legend>
            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              className="input"
              placeholder="Enter your Name"
            />
            {errors.name && (
              <p className=" text-red-500 font-medium">
                {errors.name.message}
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Email</legend>
            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              className="input"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className=" text-red-500 font-medium">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">
              Photo URL (Link)
            </legend>
            <input
              type="text"
              {...register("photo", {
                required: "Photo URL field is required",
              })}
              className="input"
              placeholder="Enter your Photo URL"
            />
            {errors.photo && (
              <p className=" text-red-500 font-medium">
                {errors.photo.message}
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Password</legend>
            <input
              type="password"
              {...register("password", {
                required: "Password field is required",
              })}
              className="input"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-red-500 font-medium">
                {errors.password.message}
              </p>
            )}
          </fieldset>
          <button className=" btn bg-green-800 text-white w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
