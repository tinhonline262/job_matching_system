import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import type { LoginFormValues } from "@/types";

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login:", data);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left / Testimonial Panel */}
      <div className="hidden lg:flex flex-1 bg-app-bg relative p-16">
        <div className="flex items-center gap-2 absolute top-16 left-16">
          <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="text-base font-bold text-primary leading-6">
            Resume Intelligence
          </span>
        </div>

        <div className="w-full h-full flex items-center">
          <blockquote className="max-w-[580px] text-lg font-normal leading-7 text-primary italic">
            &ldquo;The AI feedback showed me exactly what recruiters were looking
            for. I improved my resume in one evening and started getting
            interview calls the same week.&rdquo; &mdash; Minh Tran, Backend
            Developer
          </blockquote>
        </div>
      </div>

      {/* Right / Form Panel */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-[350px] max-w-full">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold leading-[29px] text-primary mb-2">
              Welcome back
            </h1>
            <p className="text-sm font-normal leading-5 text-text-2ry">
              AI-Powered Resume Intelligence
            </p>
          </div>

          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-[3px]">
              <label
                className="text-sm font-medium text-primary leading-5"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="h-12 px-4 border border-[#e2e8f0] rounded-lg text-sm text-primary bg-white focus:border-primary focus:outline-none transition-colors w-full placeholder:text-text-lighter"
                placeholder="name@example.com"
                {...register("email", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-[3px]">
              <div className="flex justify-between items-center">
                <label
                  className="text-sm font-medium text-primary leading-5"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-normal text-primary leading-4 underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                className="h-12 px-4 border border-[#e2e8f0] rounded-lg text-sm text-primary bg-white focus:border-primary focus:outline-none transition-colors w-full placeholder:text-text-lighter"
                placeholder="••••••••"
                {...register("password", { required: true })}
              />
            </div>

            <button
              type="submit"
              className="h-9 bg-black text-white text-sm font-medium rounded-lg w-full hover:opacity-90 transition-opacity leading-5"
            >
              Log in
            </button>

            <div className="flex items-center">
              <span className="flex-1 h-px bg-[#e2e8f0]" />
              <span className="px-4 text-sm font-normal text-text-soft whitespace-nowrap leading-5">
                Or continue with
              </span>
              <span className="flex-1 h-px bg-[#e2e8f0]" />
            </div>

            <button
              type="button"
              className="h-9 bg-white text-primary text-sm font-medium border border-[#e2e8f0] rounded-lg w-full flex items-center justify-center gap-2 hover:bg-[#f8f8f8] transition-colors leading-5"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.68 8.18C15.68 7.61 15.63 7.07 15.54 6.55H8V9.64H12.3C12.1 10.64 11.52 11.49 10.66 12.05V14.07H13.27C14.82 12.63 15.68 10.6 15.68 8.18Z"
                  fill="#4285F4"
                />
                <path
                  d="M8 16C10.16 16 11.97 15.29 13.27 14.07L10.66 12.05C9.94 12.53 9.04 12.82 8 12.82C5.92 12.82 4.15 11.37 3.52 9.44H0.83V11.52C2.12 14.09 4.86 16 8 16Z"
                  fill="#34A853"
                />
                <path
                  d="M3.52 9.44C3.36 8.96 3.27 8.44 3.27 7.91C3.27 7.38 3.36 6.87 3.52 6.38V4.31H0.83C0.3 5.36 0 6.55 0 7.91C0 9.27 0.3 10.46 0.83 11.52L3.52 9.44Z"
                  fill="#FBBC05"
                />
                <path
                  d="M8 3.18C9.15 3.18 10.18 3.59 10.99 4.35L13.33 2.01C11.97 0.76 10.16 0 8 0C4.86 0 2.12 1.91 0.83 4.48L3.52 6.56C4.15 4.63 5.92 3.18 8 3.18Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </form>

          <p className="text-center text-sm font-normal text-text-2ry leading-5 mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="font-medium text-primary underline">
              Sign up
            </Link>
          </p>

          <p className="text-center text-xs font-normal text-text-muted leading-4 mt-4">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
