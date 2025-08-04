import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="text-white" style={{ background: 'linear-gradient(45deg, #060067, #0a00ab)' }}>
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ark Digital ltd</h3>
            <p className="text-secondary-300 mb-4">
              Empowering organizations with a complete digital presence. Professional web development, social media management, and digital content creation services.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-400 transition-colors p-2 -ml-2">
                <FiFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-400 transition-colors p-2">
                <FiTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-400 transition-colors p-2">
                <FiInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-400 transition-colors p-2">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-400 transition-colors inline-block py-1">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-primary-400 transition-colors inline-block py-1">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-secondary-300 hover:text-primary-400 transition-colors inline-block py-1">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors inline-block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-secondary-300 py-1">Website Development</li>
              <li className="text-secondary-300 py-1">Social Media Management</li>
              <li className="text-secondary-300 py-1">Digital Content Creation</li>
              <li className="text-secondary-300 py-1">Graphic Design</li>
              <li className="text-secondary-300 py-1">E-commerce Solutions</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-secondary-300">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-primary-400 flex-shrink-0" />
                <a href="tel:+254794758381" className="text-secondary-300 hover:text-primary-400 transition-colors break-all">
                  +254 794 758 381
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-primary-400 flex-shrink-0" />
                <a href="mailto:joshuadykeskenya@gmail.com" className="text-secondary-300 hover:text-primary-400 transition-colors break-all">
                  joshuadykeskenya@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm text-center md:text-left">
            © {currentYear} Ark Digital ltd. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 md:space-x-6 text-sm">
              <li>
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors py-1 px-2">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors py-1 px-2">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 