import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Search from "../Search"
import Navigation from "../Navigation"
import { useAuth } from "../../context/AuthContext"

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const { user, isAuthenticated, logout } = useAuth();


  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setDarkMode(true)
        document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const isDark = !darkMode
    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }

  return (
    <div className="bg-primary dark:bg-gray-900 transition-colors sticky top-0 z-50">
      <header className=" max-w-[95%] mx-auto px-4">
        <div className="top-strip flex flex-col gap-2 py-2 text-sm font-semibold
                        md:flex-row md:items-center md:justify-between
                        text-gray-800 dark:text-gray-200">

          <div className="text-center md:text-left md:w-1/2 md:block hidden">
            Super Deal! Free Shipping on Orders Over $50
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4 relative z-50">
            <ul className="flex gap-3">
            {user ? (
                <>
                  <span>Hi, {user.name}</span>
                  <li>
                    <Link
                        to="/"
                        onClick={logout}
                        className="px-4 py-1.5 rounded-full text-sm font-medium group
                                  hover:shadow-md dark:hover:shadow-white dark:hover:shadow-sm
                                  transition-all duration-300 hover:scale-105 border-r-2 border-gray-400 dark:border-gray-600">

                        Logout
                      </Link>  
         
                  </li>
                    <li>
                      <Link
                          to="/profile"
                          className="px-4 py-1.5 rounded-full text-sm font-medium group relative
                                    hover:shadow-md dark:hover:shadow-white dark:hover:shadow-sm
                                    transition-all duration-300 hover:scale-105 border-r-2 border-gray-400 dark:border-gray-600">

                          My Account
                        
                        <div
                            className="absolute top-full left-0 min-w-[160px] mt-1
                            bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200
                            shadow-lg opacity-0 invisible
                            group-hover:opacity-100 group-hover:visible
                            transition-all duration-200"
                        >
                            <ul className="flex flex-col">
                            <li className="cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700
                                        hover:text-gray-900 dark:hover:text-white transition-colors" >
                          <Link
                              to="/orders"
                              className="px-4 py-1.5 text-sm font-medium group
                                        transition-all duration-300 hover:scale-105  border-gray-400 dark:border-gray-600">

                              Orders
                            </Link>  
                            </li>
                            <li className="cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700
                                        hover:text-gray-900 dark:hover:text-white transition-colors">
                          <Link
                              to="/profile"
                              className="px-4 py-1.5 text-sm font-medium group
                                        transition-all duration-300 hover:scale-105  border-gray-400 dark:border-gray-600">

                              My Profile
                            </Link>  
                            </li>
                            <li className="cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700
                                        hover:text-gray-900 dark:hover:text-white transition-colors">
                          <Link
                              to="/cart"
                              className="px-4 py-1.5 text-sm font-medium group
                                        transition-all duration-300 hover:scale-105  border-gray-400 dark:border-gray-600">

                              Cart
                            </Link>  
                            </li>                            
                            </ul>
                        </div>  
                        </Link>             
                    </li>
                </>
              ) : 
            (
            <>
              <li>
                <Link
                    to="/login"
                    className="px-4 py-1.5 rounded-full text-sm font-medium
                              hover:shadow-md dark:hover:shadow-white dark:hover:shadow-sm
                              transition-all duration-300 hover:scale-105 border-r-2 border-gray-400 dark:border-gray-600">

                    Login
                  </Link>             
              </li>
              <li>
                <Link className="px-4 py-1.5 rounded-full text-sm font-medium
                              hover:shadow-md dark:hover:shadow-white dark:hover:shadow-sm
                              transition-all duration-300 hover:scale-105 border-r-2 border-gray-400 dark:border-gray-600" to="/register">Register</Link>
              </li>
            </>
          )}

              <li className="hidden md:block">
                <Link className="px-4 py-1.5 rounded-full text-sm font-medium
                              hover:shadow-md dark:hover:shadow-white dark:hover:shadow-sm
                              transition-all duration-300 hover:scale-105 border-r-2 border-gray-400 dark:border-gray-600" to="/help-contact">Help or Contact</Link>
              </li>

            </ul>

            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
                className="px-4 py-1.5 rounded-full text-sm font-medium
                                hover:shadow-md dark:hover:shadow-white dark:hover:shadow-sm
                                transition-all duration-300 hover:scale-105 border-r-2
                              ml-2  border 
                          border-gray-400 dark:border-gray-700
                          hover:bg-black/10 dark:hover:bg-white/10"
            >
              {darkMode ? "Light ☀️" : "Dark 🌙"}
            </button>
          </div>

        </div>

        <div className="flex items-center justify-between md:flex-row flex-col py-4 border-t border-b dark:border-gray-700">

          <div className="col1 flex justify-center md:justify-start  dark:text-white ">
            <Link to="/" aria-label="Go to Home Page">
              <svg width="360" height="90" viewBox="0 0 360 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#D4AF37"/>
                    <stop offset="50%" stop-color="#FFD700"/>
                    <stop offset="100%" stop-color="#B8962E"/>
                  </linearGradient>
                </defs>

                <g transform="translate(12,18)">
                  <rect x="0" y="8" width="42" height="22" rx="6" fill="url(#goldGradient)"/>
                  <path d="M6 8 L2 0" stroke="url(#goldGradient)" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="14" cy="36" r="4" fill="currentColor"/>
                  <circle cx="34" cy="36" r="4" fill="currentColor"/>
                </g>

                <text x="80" y="55"
                font-family="Playfair Display, Georgia, serif"
                font-size="40"
                font-weight="600"
                letter-spacing="1.2"
                fill="currentColor">
                  Urban
                  <tspan fill="url(#goldGradient)">Cart</tspan>
                </text>

              </svg>
            </Link>
          </div>

          <div className="col2 md:w-[40%]">
            <Search />
          </div>

        </div>

        <div className="border-b dark:border-gray-700">
          <Navigation />
        </div>

      </header>
    </div>
  )
}
