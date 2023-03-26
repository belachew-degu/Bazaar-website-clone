import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom'
import {carImage, logoDark} from '../assets/index'

function Header() {
    const productData = useSelector((state)=>state.bazar.productData)
    const userInfo = useSelector((state) => state.bazar.userInfo);
    console.log(productData)
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to="/">
            <div>
                <img className='w-24 h-6 bg-white' src={logoDark} alt="dark logo" />
            </div>        
        </Link>
        
        <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
                  <Link to="/">
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                </Link>
                <Link to="/pages">
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                </Link>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
            </ul>
            <Link to="/cart">
                <div className='relative'>
                        <img className='w-6 h-8' src={carImage} alt="CartImage"/>
                        <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
                    </div>
            </Link>
            <Link to="/login">
        <img
          className="w-8 h-8 rounded-full"
          src={
            userInfo
              ? userInfo.image
              : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="userLogo"
        />
      </Link>
        </div>
       </div>
    </div>
  )
}

export default Header