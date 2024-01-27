// Import necessary dependencies and components
"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import React, { useState } from "react";
import RippleButton from "@/components/buttons/RippleButton";
import { changePassword } from "@/app/_authActions"; // Assuming you have a changePassword function
import { toast } from "sonner";

// Define the ChangePassword component
const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Handle form submission
  const onSubmit = async (data) => {
    const { oldPassword, newPassword } = data;

    setIsLoading(true);

    try {
      // Assuming you have a changePassword function
    const res =  await changePassword({ oldPassword, newPassword });

      // Display success notification
      if(res?.msg)  toast.success(res.msg);
    } catch (error) {
      // Display error notification
      console.log(error);
      toast.error("Failed to change password. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="pt-[300px] w-[300px] min-h-screen flex flex-col items-center mx-auto">
      <h3 className="pb-8 text-2xl">Change Password</h3>

      {/* Form for old and new password input */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-auto p-4 border shadow-xl"
      >
        {/* Old Password */}
        <div className="relative mt-6">
          <input
               type={isPasswordVisible ? "text" : "password"}
            className="relative z-10 w-full p-2 bg-transparent border-2 rounded-lg outline-none peer focus:border-skin-base placeholder:text-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
            id="oldPassword"
            placeholder="Old Password"
            name="oldPassword"
            {...register("oldPassword", {
              required: "Old Password is required",
            })}
          />
          <label
            htmlFor="oldPassword"
            className="absolute z-20 px-1 text-sm transition-all bg-skin-inverted text-skin-gray left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-focus:text-skin-base peer-placeholder-shown:-z-10 peer-focus:z-20 peer-placeholder-shown:text-base peer-focus:text-sm"
          >
            Old Password
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute w-4 h-4 top-3.5 right-3 hover:cursor-pointer z-10"
            onMouseDown={(e) => {
              e.preventDefault();
              setIsPasswordVisible((prevState) => !prevState);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="w-full h-5 pt-1 text-skin-red">
            {errors.oldPassword?.message}
          </p>
        </div>

        {/* New Password */}
        <div className="relative mt-6">
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="relative z-10 w-full p-2 pr-8 bg-transparent border-2 rounded-lg outline-none peer focus:border-skin-base placeholder:text-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
            id="newPassword"
            placeholder="New Password"
            name="newPassword"
            {...register("newPassword", {
              required: "New Password is required",
              minLength: {
                value: 8,
                message: "Min length is 8",
              },
              maxLength: {
                value: 32,
                message: "Max length is 32",
              },
            })}
          />
          <label
            htmlFor="newPassword"
            className="absolute z-20 px-1 text-sm transition-all bg-skin-inverted text-skin-gray left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-focus:text-skin-base peer-placeholder-shown:-z-10 peer-focus:z-20 peer-placeholder-shown:text-base peer-focus:text-sm"
          >
            New Password
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute w-4 h-4 top-3.5 right-3 hover:cursor-pointer z-10"
            onMouseDown={(e) => {
              e.preventDefault();
              setIsPasswordVisible((prevState) => !prevState);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="w-full h-5 pt-1 text-skin-red">
            {errors.newPassword?.message}
          </p>
        </div>

        {/* Submit button */}
        <RippleButton
          text={isLoading ? "Loading..." : "Change Password"}
          buttonClasses={"w-full mt-10 text-xl rounded-md bg-skin-fill text-skin-inverted p-2 "}
          type="submit"
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>

    </div>
  );
};

export default ChangePassword;
