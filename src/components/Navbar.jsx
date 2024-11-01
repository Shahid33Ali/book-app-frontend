import { Link } from "react-router-dom";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  const [isDropDowm, setIsDropDown] = useState(false);
  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
  ];
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <header className="max-w-screen mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="w-6 h-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute  inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropDown(!isDropDowm)}>
                  <img
                    src={avatarImg}
                    className="size-7 rounded-full ring-2 ring-blue-500"
                  />
                </button>
                {isDropDowm && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul>
                      {navigation.map((el) => (
                        <li
                          key={el.name}
                          onClick={() => setIsDropDown(!isDropDowm)}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <Link to={el.href}>{el.name}</Link>
                        </li>
                      ))}
                      <li>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={handleLogout}
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 py-2 flex items-center space-x-1"
          >
            <HiOutlineShoppingCart />
            <span>{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
