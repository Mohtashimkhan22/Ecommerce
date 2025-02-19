import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-black text-white">
          <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 md:mx-0 mx-auto text-center md:text-left">
                <h3 className="font-bold text-2xl">Insta<span className="text-red-500">Mart</span></h3>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                  MENU
                </h2>
                <ul className="list-none mb-10">
                  <li className="mt-1">
                    Feature
                  </li>
                  <li className="mt-1">
                    Info Center
                  </li>
                  <li className="mt-1">
                    News Blog
                  </li>
                  <li className="mt-1">
                    Login
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                  COMPANY
                </h2>
                <nav className="list-none mb-10">
                  <li className="mt-1">
                    About Us
                  </li>
                  <li className="mt-1">
                    Privacy Policy
                  </li>
                  <li className="mt-1">
                    Term & Conditions
                  </li>
                  <li className="mt-1">
                    Login
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                  CONTACT
                </h2>
                <nav className="list-none mb-10">
                  <li className="mt-1">
                    Contact Sales
                  </li>
                  <li className="mt-1">
                    +123689731
                  </li>
                  <li className="mt-1">
                    News Blog
                  </li>
                  <li className="mt-1">
                    Login
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                  TECH SUPPORT
                </h2>
                <nav className="list-none mb-10">
                  <li className="mt-1">
                    Contact Support
                  </li>
                  <li className="mt-1">
                    Info Center
                  </li>
                  <li className="mt-1">
                    Activate
                  </li>
                  <li className="mt-1">
                    Login
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-500">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className=" text-sm text-center sm:text-left">
                © 2024 Khanshop —
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className=" ml-1"
                  target="_blank"
                >
                  @copyright
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 ">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 ">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
