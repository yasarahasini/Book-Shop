import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { PiHeartFill } from "react-icons/pi";
import { PiShoppingCartDuotone } from "react-icons/pi";
import avatarImg from "../assets/avatar.png";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';



const navigation=[
  {name:"Dashboard",href:"/dashboard"},
  {name:"Orders",href:"/order"},
  {name:"Cart Page",href:"/Cart"},
  {name:"Check Out",href:"/checkout"},
]
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const cartItems= useSelector(state => state.cart.cartItems);

  const {currentUser, logout} = useAuth()

  const handleLogOut = () => {
    logout();
    setIsDropdownOpen(false);
  }

  return (
    <header className="max-w-screen-2xl mx-auto px-10 py-6">
      <nav className="flex justify-between items-center">

        {/* left side*/}

        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <FaBarsProgress className="size-7"/>
          </Link>

          {/* serch input*/ }

          <div className="relative sm:w-72 w-40 space-x-2">
            <BsSearch className="absolute inline-block left-3 inset-y-2 "/>
            <input type="text" placeholder="Search Here"  
            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md 
            forcus:outline-none" 
            />
          </div>
        </div>

        {/* right side*/}

        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div className="">
            {
              currentUser ? <>
                <button onClick={() =>setIsDropdownOpen(!isDropdownOpen)}> 
                  <img src={avatarImg} alt="user" className={`size-10 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}
                  />
                </button></> :<Link to="/login"><FaRegUser className="size-7"/> </Link>
            }
          </div>
        
        <button className="hidden sm:block">
          <PiHeartFill className="size-7"/>
        </button>
        {/*show dropdowns*/}
        {
          isDropdownOpen && (
            <div className="absolute right-0 mt-52 w-48 
            bg-white shadow-lg rounded-md z-40">
              <ul className="py-2">
                {
                  navigation.map((item)=> (
                    <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                      <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
                <li>
                  <button 
                  onClick={handleLogOut}
                  className="block w-full text-left px-4 py-2 text-sm
                   hover:bg-gray-100">Logout</button>
                </li>
              </ul>
            </div>
          )
        }
        <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center 
        rounded-sm">
          <PiShoppingCartDuotone className="size-7"/>
          {
            cartItems.length > 0 ? <span className='text-sm font-semibold 
            sm:ml'>{cartItems.length}</span> :<span className="text-sm 
            font-semibold sm:ml-1">0</span>
 
          }

        </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar