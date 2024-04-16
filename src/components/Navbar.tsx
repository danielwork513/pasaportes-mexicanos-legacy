import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex h-20 w-full bg-[#007258] items-center px-6 md:px-12 justify-center ">
      <div className="flex items-center justify-between w-full">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-24"
          />
        </Link>

        <Link
          to="/tyc"
          className="text-white text-sm hover:underline"
        >
          Terminos y condiciones
        </Link>
      </div>
    </nav>
  )
}
