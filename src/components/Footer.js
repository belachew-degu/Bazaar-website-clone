import React from 'react'
import {ImGithub} from 'react-icons/im'
import { logoLight, paymentLogo } from '../assets'
import {MdLocationOn} from 'react-icons/md'

// import { BsPersonFill,BsPaypal } from 'solid-icons/bs'
import { BsFillPersonFill,BsPaypal} from "react-icons/bs";
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaHome} from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        <div className='flex flex-col gap-7'>
          <img className='w-32 h-6' src={logoLight} alt="light logo" />
          <p className='text-white text-sm tracking-wide'>o ReactBD.com</p>
          <img className='w-56 ' src={paymentLogo} alt="payment logo" />
          <div className='flex gap-5 text-lg text-gray-400'>
             <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
              <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
              <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
              <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
              <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
          </div>

        </div>
        {/* ========locate U start here======== */}
        <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
            <div className='text-base flex flex-col gap-2'>
              <p>MBD,Ruwi,Muscat-Oman</p>
              <p>mobile: 503 555 5555</p>
              <p>mobile: 503 555 5555</p>
              <p>e-mail:bazarclone@gmail.com</p>
            </div>
        </div>
        {/*++++++++++++ Locate us end her+++++++++++++++++++ */}
        {/* *************************Profile starrt Here ***************************** */}
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
            {/* <div className='flex flex-col gap-2 text-base'> */}
             <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                  <BsFillPersonFill/>
                </span>
                my account</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                  <BsPaypal />
                </span>
                checkout</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                  <FaHome />
                </span>
                order tracking</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                <span>
                  <MdLocationOn />
                </span>
                help & support</p>
            {/* </div> */}
        </div>
        {/* *************Profile End here************** */}
        {/* *************Subscripe End here************** */}
        <div className='flex flex-col justify-center '>
          <input
          className='bg-transparent border px-4 py text-sm'
          placeholder='e-mail'
          type='text'
          />
          <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
          Subscribe 
          </button>
          {/***********************Subcribe End here***************************/}
        </div>
      </div>
    </div>
  )
}

export default Footer