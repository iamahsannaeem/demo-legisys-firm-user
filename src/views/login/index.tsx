"use client";

import { Logo } from "@/assets/icons/logo";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import Link from "next/link";

export const Login = () => {
  return (
    <main>
      <div className="w-full flex min-h-screen justify-center items-center ">
        <div className="w-[430px] py-24 border-[1px] border-customBorderColor  shadow-customShadow flex items-center justify-center flex-col bg-baseColor">
          <div className="text-center w-[195px] h-[60px] my-3 mx-auto flex justify-center items-center">
            <Logo />
          </div>
          <div className="w-4/5 flex flex-col mt-[15px] mx-auto gap-[10px] text-center text-[12px] font-bold text-secondary">
            Welcome back! Login below.
          </div>
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="w-4/5 flex flex-col m-[5px] gap-3 mx-auto "
          >
            <Input
              label="Email"
              labelCx="text-sm"
              // {...register("email", emailValidation())}
              // error={errors?.email?.message}
            />
            <Input
              type="password"
              label="Password"
              labelCx="text-sm"
              // {...register("password", { required: "Password is required" })}
              // error={errors?.password?.message}
            />
            <div className="text-end -mt-1 text-[12px]">Forgot password?</div>
            <div>
              <Button
                color="primary"
                className="mt-1 mx-auto px-16 font-roboto"
                type="submit"
                // submitting={isLoading}
              >
                Login
              </Button>
            </div>
          </form>

          <div className="w-4/5 flex justify-end mt-4 mx-auto text-[12px]">
            <div className="">
              Create an account?{" "}
              <Link href="/auth/register">
                <span className="underline">Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
