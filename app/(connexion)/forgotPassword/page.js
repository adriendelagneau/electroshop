// Import necessary dependencies and components
"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import React, { useState } from "react";
import RippleButton from "@/components/buttons/RippleButton";
import { forgotPasswordWitnCredentials } from "@/app/_authActions"; // Assuming you have a resetPassword function
import { toast } from "sonner";

// Define the ForgotPassword component
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const onSubmit = async (data) => {
    const { email } = data;

    setIsLoading(true);

    try {
      // Assuming you have a resetPassword function
      await forgotPasswordWitnCredentials(email);

      // Display success notification
      toast.success(`Password reset instructions sent to ${email}`);
    } catch (error) {
      // Display error notification
      console.log(error)
      toast.error(`Failed to reset password. Please try again.`);
    }

    setIsLoading(false);
  };

  return (
    <div className="pt-[300px] w-[300px] min-h-screen flex flex-col items-center mx-auto">
      <h1 className="pb-8 text-4xl">Forgot Password</h1>

      {/* Form for email input */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-auto p-4 border shadow-xl"
      >
        <div className="relative mt-6">
          <input
            type="email"
            className="relative z-10 w-full p-2 bg-transparent border-2 rounded-lg outline-none peer focus:border-skin-base placeholder:text-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
            id="email"
            placeholder="Email"
            name="email"
            {...register("email", {
              required: "Email is required",
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
            htmlFor="email"
            className="absolute z-20 px-1 text-sm transition-all bg-skin-inverted text-skin-gray left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-focus:text-skin-base peer-placeholder-shown:-z-10 peer-focus:z-20 peer-placeholder-shown:text-base peer-focus:text-sm"
          >
            Email
          </label>
          <p className="w-full h-5 pt-1 text-skin-red">
            {errors.email?.message}
          </p>
        </div>

        {/* Submit button */}
        <RippleButton
          text={"send email"}
          buttonClasses={"w-full mt-10 text-xl rounded-md bg-skin-fill text-skin-inverted p-2 "}
          type="submit"
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>

      {/* Link to the login page */}
      <Link href="/login" className="mt-9 hover:text-skin-basetext-md ">
        Remember your password? LOGIN.
      </Link>
    </div>
  );
};

export default ForgotPassword;
