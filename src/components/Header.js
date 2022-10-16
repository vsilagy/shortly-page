import { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative container max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo shortly" />
          <nav className="hidden space-x-8 font-bold md:flex">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </nav>

          {open && (
            <nav className="absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 md:hidden">
              <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
                <a
                  href="#"
                  className="text-grayishViolet hover:text-veryDarkViolet"
                >
                  Features
                </a>
                <a className="text-grayishViolet hover:text-veryDarkViolet">
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-grayishViolet hover:text-veryDarkViolet"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-grayishViolet hover:text-veryDarkViolet"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="px-8 py-3 font-bold text-white bg-cyanish rounded-full hover:opacity-70"
                >
                  Sign Up
                </a>
              </div>
            </nav>
          )}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet md:flex">
            <a href="#" className="hover:text-veryDarkViolet">
              Login
            </a>
            <a
              href="#"
              className="px-8 py-3 font-bold text-white bg-cyanish rounded-full hover:opacity-70"
            >
              Sign Up
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
          >
            <img src={open ? close : hamburger} />
          </button>
        </div>
      </header>
    </>
  );
}
