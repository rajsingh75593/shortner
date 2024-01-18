import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <>
      <div className="w-full h-22 p-2 bg-fixed bg-violet-800 text-white">
        <div className="flex items-center max-w-screen-xxl focus:before:bg-transparent h-16 mx-auto" >
          <div className="flex items-center w-2/12 ms-2  text-center justify-center uppercase text-green-300 "><li className='cursor-pointer list-none'>shortner</li></div>
          <div className="flex items-center mx-2 list-none w-5/12">
            <div className="menu-bar">
              <h3>Products<i className="uil uil-angle-down"></i></h3>
              <div className="lists">
                <ul className="items">
                  <li><a href="#">Link Management</a></li>
                  <li><a href="#">QR Code Generator</a></li>
                </ul>
              </div>
            </div>
            <div className="menu-bar">
              <h3>Resources<i className="uil uil-angle-down"></i></h3>
              <div className="lists">
                <ul className="items">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </div>
            </div>
            <div className="menu-bar">
              <h3>Comparisons<i className="uil uil-angle-down"></i></h3>
              <div className="lists">
                <ul className="items">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end pe-6 h-16 w-5/12 me-2 ">
            <li className='list-none mx-4'><a href="/login">Login</a></li>
            <li className='list-none mx-4 px-3.5 py-1.5 rounded-md bg-orange-500 hover:bg-orange-600 focus:outline-none delay-100'><a href="/login">Sign Up</a></li>
          </div>
        </div>
      </div>
    </>
  )
}
