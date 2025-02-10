"use client";
import { Logo } from "@/assets/icons/logo";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import Link from "next/link";

export const Register = () => {
  return (
    <div className="w-full flex min-h-screen justify-center items-center ">
      <div className="w-[430px] py-10 border-[1px] border-customBorderColor  shadow-customShadow flex items-center justify-center flex-col bg-baseColor">
        <div className="text-center w-[195px] h-[60px] my-3 mx-auto flex justify-center ">
          <Logo />
        </div>
        <div className="w-4/5 flex flex-col mt-[15px] mx-auto gap-[10px] text-center text-[12px] font-bold text-secondary">
          Register your account below
        </div>
        <form
          //   onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 flex flex-col m-[5px] gap-3 mx-auto "
        >
          <Input
            label="Full Name"
            labelCx="text-sm"
            // {...register("name", { required: "Name is required" })}
            // error={errors?.name?.message}
          />
          <Input
            label="Email"
            labelCx="text-sm"
            // {...register("email", emailValidation())}
            // error={errors?.email?.message}
          />
          <Input
            label="Password"
            type="password"
            labelCx="text-sm"
            // {...register("password", { required: "Password is required" })}
            // error={errors?.password?.message}
          />
          <Input
            label="Confirm Password"
            labelCx="text-sm"
            type="password"
            // {...register("confirmPassword", {
            //   required: "Confirm Password is required",
            //   validate: (value) =>
            //     value === password || "Passwords do not match",
            // })}
            // error={errors?.confirmPassword?.message}
          />

          <div className="mt-1">
            <Button
              color="primary"
              className="mt-1 mx-auto px-16 font-roboto"
              type="submit"
              //   submitting={isLoading}
            >
              Sign Up
            </Button>
          </div>
        </form>

        <div className="w-4/5 flex justify-end mt-4 mx-auto text-[12px]">
          <div className="">
            Have an account?{" "}
            <Link href="/auth/login">
              <span className="underline">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
