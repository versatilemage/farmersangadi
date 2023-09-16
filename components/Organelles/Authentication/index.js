"use client";

import Image from "next/image";
import AUthImage from "@/public/assets/authentication.jpg";
import LoginForm from "@/components/Molecules/Login";
import SignupForm from "@/components/Molecules/Signup";
import { useState } from "react";

const AuthenticationComponent = () => {
const [loginform, setLoginform] = useState(true)
  return (
    <section className="flex flx-col items-center justify-center w-full min-h-screen h-full">
      <section className="flex flex-row items-center justify-center w-10/12 bg-[#5BA36B] h-5/6 max-w-[1400px] max-h-[800px] rounded-lg">
        <div className="w-2/4 text-center">
          <Image
            src={AUthImage}
            alt="no image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover max-h-[800px] rounded-l-lg"
            loading="lazy"
            quality={100}
          />
        </div>
        <div className="w-2/4 text-center flex flex-col items-center justify-center gap-16">
          {loginform ? <LoginForm /> : <SignupForm/>}
          <section className="p-3 flex items-center justify-between w-3/4">
            <p className="text-tertiary hover:text-secondary duration-300 cursor-pointer hover:font-lightbold">
              Forgot Password ?
            </p>
            <p className="text-tertiary hover:text-secondary duration-300 cursor-pointer hover:font-lightbold" onClick={() => setLoginform(!loginform)}>
                {loginform ? "Create an account" : "Already have an account"}
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default AuthenticationComponent;
