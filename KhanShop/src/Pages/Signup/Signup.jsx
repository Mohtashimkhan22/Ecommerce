import React, { useState } from "react";
import bg from "../../assets/bg_shop.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
import {auth} from "../../FirebaseAuth/FirebaseAuth"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Signup = () => {

  const navigate = useNavigate();

  const [UserSignUp, setUserSignUp] = useState({username:"",email:"",password:"",cpassword:"",terms:false})

  const handleChange = (e) => {
    // console.log(e.target.value);
    setUserSignUp({...UserSignUp, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if((!UserSignUp.username || !UserSignUp.email || !UserSignUp.password || !terms)){
      return toast.error("All field are required");
    }else if(UserSignUp.password !== UserSignUp.cpassword){
      return toast.error("password and confirm password is not same");
    }
     else {
      createUserWithEmailAndPassword(auth,UserSignUp.email, UserSignUp.password)
      .then(async (res)=> {
        const user = res.user;
        await updateProfile(user,{displayName:UserSignUp.username});
        navigate("/login");
      })
      .catch((err)=> toast.error(err.message))
    }
  };

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={bg}
            alt=""
            className="object-cover w-full object-center h-[200px] mt-5"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.4]"></div>
          <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
            Sign Up
          </h2>
        </div>
        <div className="lg:mt-5 lg:mb-5">
          <section class="bg-gray-50 dark:bg-gray-50">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label
                        htmlFor="username"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={UserSignUp.username}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Khan Shop"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={UserSignUp.email}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        value={UserSignUp.password}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cpassword"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <input
                        type="cpassword"
                        name="cpassword"
                        id="cpassword"
                        placeholder="••••••••"
                        value={UserSignUp.cpassword}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          value={UserSignUp.terms}
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                          onChange={handleChange}
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          htmlFor="terms"
                          class="font-light text-gray-500 dark:text-gray-300"
                        >
                          I accept the{" "}
                          <a
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={handleSubmit}
                    >
                      Create an account
                    </button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link to="/login">
                      <button class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Login here
                      </button>
                      </Link>
                      
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Signup;
