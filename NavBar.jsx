import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to={'/'} className="rounded-md px-3 py-2 text-sm font-medium text-white" >Home</Link>
                 
               </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-4">
                  <Link to={'/register'} className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 ">Register</Link>
                  <Link to={'/login'} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</Link>
                  <Link to={'/logout'} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Logout</Link>
                
                </div>
            </div>
          </div>
        </div>

      </nav>

  )
}

export default NavBar
