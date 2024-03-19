import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/services", name: "Services", id: "services" },
    { path: "/contact", name: "Contact", id: "contact" },
    { path: "/dashboard", name: "Dashboard", id: "dashboard" },
  ];

  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="text-2xl md:hidden p-3">
        {open === true ? <IoClose /> : <RiMenu2Fill></RiMenu2Fill>}
      </div>

      <ul
        className={`md:flex absolute bg-white duration-700
      ${open ? "top-10" : "-left-60"}
      rounded-xl    md:static 
      `}
      >
        {routes.map((rout) => (
          <Link key={rout.id} rout={rout}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
