import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import toast from "react-hot-toast";


const Navbar = ({cart, userName}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleChange = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
    // setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    auth.signOut().then(()=>{
      toast.success("Logout successfully");
    }).catch((error) => {
        toast.error(error.message);
    })
  }

  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200 fixed top-0 z-10 w-full">
          <div className="container mx-auto flex p-5 items-center justify-between">
            <div>
              <Link to="/">
                <h3 className="font-bold text-2xl">
                  Insta<span className="text-red-500">Mart</span>
                </h3>
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    Home
                  </li>
                </Link>

                <Link to="/allproducts">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    All Products
                  </li>
                </Link>
                <Link to="/aboutus">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    About
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            {isOpen ? (
              <div className="">
                <ul className="flex flex-col gap-10 absolute top-[73px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center justify-center font-bold text-2xl">
                  <Link to="/">
                    <li
                      className="mt-5 hover:text-gray-900 cursor-pointer"
                      onClick={ToggleChange}
                    >
                      Home
                    </li>
                  </Link>

                  <Link to="/allproducts">
                    <li
                      className="mt-5 hover:text-gray-900 cursor-pointer"
                      onClick={ToggleChange}
                    >
                      All Products
                    </li>
                  </Link>
                  <Link to="/aboutus">
                    <li
                      className="mt-5 hover:text-gray-900 cursor-pointer"
                      onClick={ToggleChange}
                    >
                      About
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li
                      className="mt-5 hover:text-gray-900 cursor-pointer"
                      onClick={ToggleChange}
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
                <button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer mr-5">
                  <RxCross2 size={30} onClick={ToggleChange} />
                </button>
              </div>
            ) : (
              ""
            )}

            <div className="flex justify-center items-center gap-3">
              {
                userName?(
                  <>
                  <Link to="/login">
                <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base" onClick={handleLogout} >
                  Logout
                </button>
              </Link>
              <button>{userName}</button>
                  </>
                ):(<>
                  <Link to="/login">
                <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
                  Login
                </button>
              </Link>
                  </>)
              }
              {/* <Link to="/login">
                <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
                  Login
                </button>
              </Link>
              <button>{userName}</button> */}
              <Link to="/cart">
                <button className="relative mr-10">
                  <span className="absolute top-[-5px] right-0 bg-[red] text-white px-1 rounded-full text-xs" >{cart.length}</span>
                  <FaCartShopping size={25} />
                </button>
              </Link>
              {isOpen ? (
                ""
              ) : (
                <button className="md:hidden mr-7">
                  <GiHamburgerMenu size={25} onClick={ToggleChange} />
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
