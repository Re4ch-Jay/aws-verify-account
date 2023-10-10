import React from 'react'

export default function Navbar() {
  return (
    <nav className="border-gray-20 mt-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
            <a href="/" className="flex items-center">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
                className="h-14 mr-3"
                alt="AWS Logo"
            />
            </a>
        </div>
    </nav>
  )
}
