import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

// Assets
import logoImage from '../assets/images/logo-nobg.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2 md:py-3' 
          : 'bg-transparent py-3 md:py-5'
      }`}
      style={scrolled ? {} : { background: 'rgba(232, 231, 255, 0.9)', backdropFilter: 'blur(8px)' }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img 
              src={logoImage} 
              alt="Ark Digital ltd Logo" 
              className="h-10 md:h-12 mr-2 md:mr-3 transition-all duration-300 hover:scale-105"
            />
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-primary-500">Ark</span>
              <span className="text-secondary-800">Digital</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `${isActive ? 'text-primary-600 font-medium' : 'text-secondary-700'} 
              hover:text-primary-500 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-0.5`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `${isActive ? 'text-primary-600 font-medium' : 'text-secondary-700'} 
              hover:text-primary-500 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-0.5`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `${isActive ? 'text-primary-600 font-medium' : 'text-secondary-700'} 
              hover:text-primary-500 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-0.5`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              `${isActive ? 'text-primary-600 font-medium' : 'text-secondary-700'} 
              hover:text-primary-500 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-0.5`
            }
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/contact" 
            className="btn-primary text-sm px-5 py-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FiX className="text-secondary-800" />
          ) : (
            <FiMenu className="text-secondary-800" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-30 overflow-hidden"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="flex flex-col py-4 px-6 space-y-4"
              >
                <motion.div variants={itemVariants}>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      `block py-3 px-2 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-secondary-700'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      `block py-3 px-2 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-secondary-700'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink 
                    to="/services" 
                    className={({ isActive }) => 
                      `block py-3 px-2 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-secondary-700'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <NavLink 
                    to="/portfolio" 
                    className={({ isActive }) => 
                      `block py-3 px-2 text-lg ${isActive ? 'text-primary-600 font-medium' : 'text-secondary-700'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </NavLink>
                </motion.div>
                <motion.div variants={itemVariants} className="pt-2">
                  <NavLink 
                    to="/contact" 
                    className="btn-primary w-full text-center py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </NavLink>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar 