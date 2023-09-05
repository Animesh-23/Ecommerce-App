import { Link } from "react-router-dom";
import Logo from "../assets/organic-store-logo5.svg";
import { TiUser } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiPound } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className=" flex justify-between m-4 bg-white">
      <div className="flex items-center gap-7">
        <div className=" ml-2">
          <img src={Logo} className=" w-36" />
        </div>

        <div className=" flex gap-8 text-lg font-medium">
          <Link to={"/everything"}>Everything</Link>
          <Link to={"/groceries"}>Groceries</Link>
          <Link to={"/juice"}>Juice</Link>
        </div>
      </div>
      <div className=" flex items-center gap-6">
        <div className="text-lg font-medium flex gap-4">
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <BiPound color="green" size={"20px"} />
            <span className=" text-lg text-green-800">0.00</span>
          </div>
          <div className=" flex">
            <AiOutlineShoppingCart color="green" size={"25px"} />
          </div>
        </div>
        <TiUser size={"25px"} />
      </div>
    </div>
  );
};

export default Navbar;
