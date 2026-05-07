"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateInfoPage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.name || "",
      image: user?.image || "",
    },
  });

  const onSubmit = async (data) => {
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      toast.error(error.message || "Update failed!");
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/my_profile");
  };

  return (
    <div className="container mx-auto px-4 py-10 min-h-[80vh] flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Update Information
        </h2>

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
            <label className="text-sm font-medium text-gray-600">Photo URL</label>
            <input
              type="text"
              {...register("image")}
              placeholder="Enter your photo URL"
              className="input input-bordered w-full rounded-xl mt-1"
            />
            <p className="h-5 text-red-500 text-xs">{errors.image?.message}</p>
          </div>

          <button className="w-full py-3 bg-green-800 text-white font-medium rounded-xl hover:bg-green-900 transition-colors duration-200 mt-2">
            Update Information
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateInfoPage;