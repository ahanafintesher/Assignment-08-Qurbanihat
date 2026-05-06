"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookingForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    toast.success("Booking Successful!");
    reset();
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mt-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Book This Animal</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">

        <div>
          <label className="text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            className="input input-bordered w-full rounded-xl mt-1"
          />
          <p className="h-5 text-red-500 text-xs">{errors.name?.message}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            className="input input-bordered w-full rounded-xl mt-1"
          />
          <p className="h-5 text-red-500 text-xs">{errors.email?.message}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Phone</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            placeholder="Enter your phone number"
            className="input input-bordered w-full rounded-xl mt-1"
          />
          <p className="h-5 text-red-500 text-xs">{errors.phone?.message}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            placeholder="Enter your address"
            className="textarea textarea-bordered w-full rounded-xl mt-1 resize-none"
            rows={3}
          />
          <p className="h-5 text-red-500 text-xs">{errors.address?.message}</p>
        </div>

        <button className="w-full py-3 bg-green-800 text-white font-medium rounded-xl hover:bg-green-900 transition-colors duration-200 mt-2">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;