import logo from "../images/logo.svg";

export default function Header() {
  return (
    <>
      <header className="relative container max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo shortly" />
          <div className="hidden space-x-8 font-bold lg:flex">
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
          </div>
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
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
        </div>
      </header>
    </>
  );
}
